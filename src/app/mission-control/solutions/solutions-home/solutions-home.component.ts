import { Component, OnInit } from '@angular/core';
import { Solution } from '../solutions.model';
import { Observable } from 'rxjs';
import { SolutionsService } from '../solutions.service';
import { SolutionsState, selectSolutionDeploymentsData, selectGetSolutionsStatus } from '../solutions.reducer';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SwitchFilter } from '@app/shared/switches/switches.model';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchModel,
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { Loadable } from '@app/shared/shared.reducer';
import { getSolutions } from './../solutions.actions';

@Component({
  selector: 'app-solutions-home',
  templateUrl: './solutions-home.component.html',
  styleUrls: ['./solutions-home.component.scss']
})
export class SolutionsHomeComponent implements OnInit {
  solutions$: Observable<Solution[]>;
  active = false;
  getSolutionsStatus$: Observable<Loadable> = this.store.select(selectGetSolutionsStatus);

  filters: SwitchFilter[] = [
    { name: 'Favourites', count: 0, defaultActive: false },
    { name: 'Actives', count: 0, defaultActive: true },
    { name: 'Archived', count: 0, defaultActive: false }
  ];

  current$: Observable<string>;

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.solutions;
  currentGridViewOption$: Observable<GridViewSwitchModel>;

  constructor(
    private solutionsService: SolutionsService,
    private store: Store<SolutionsState>,
    private route: ActivatedRoute
  ) {
    this.solutions$ = solutionsService.filteredEntities$;
  }

  ngOnInit() {
    this.store.dispatch(getSolutions());
    this.solutionsService.getAll().subscribe(solutions => this.numberingUpdate(solutions));
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));
    this.current$.subscribe(event => this.getSolutions(event));
    this.store.pipe(select(selectSolutionDeploymentsData)).subscribe(() => {
      this.solutionsService.getAll().subscribe(solutions => this.numberingUpdate(solutions));
    });
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions, this.gridViewOptionsName));
  }

  numberingUpdate(solutions: Solution[]) {
    const filterFavouritesLength = solutions.filter(solution => solution.isFavourite).length;
    const filterActivesLength = solutions.filter(solution => solution.isActive).length;
    const filterArchivedLength = solutions.filter(solution => !solution.isActive).length;

    this.filters = [
      { name: 'Favourites', count: filterFavouritesLength, defaultActive: false },
      { name: 'Actives', count: filterActivesLength, defaultActive: true },
      { name: 'Archived', count: filterArchivedLength, defaultActive: false }
    ];
  }

  getSolutions(filter: string) {
    filter && this.solutionsService.setFilter(filter);
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption.option === GridViewSwitchOptionsEnum.grid)
    );
  }
}
