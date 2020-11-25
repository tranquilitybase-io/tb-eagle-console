import { Component, OnInit } from '@angular/core';
import { Solution, FilterNames } from '../solutions.model';
import { Observable } from 'rxjs';
import { SolutionsService } from '../solutions.service';
import {
  SolutionsState,
  selectSolutionDeploymentsData,
  selectGetSolutionsStatus,
  selectFilteredSolutions,
  selectSolutionsHomeFilters
} from '../solutions.reducer';
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
import { getSolutions, getSolutionsSilentLoading } from './../solutions.actions';

@Component({
  selector: 'app-solutions-home',
  templateUrl: './solutions-home.component.html',
  styleUrls: ['./solutions-home.component.scss']
})
export class SolutionsHomeComponent implements OnInit {
  solutions$: Observable<Solution[]>;
  active = false;
  getSolutionsStatus$: Observable<Loadable> = this.store.select(selectGetSolutionsStatus);

  filters$: Observable<SwitchFilter[]>;

  current$: Observable<string>;

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.solutions;
  currentGridViewOption$: Observable<GridViewSwitchModel>;

  constructor(private store: Store<SolutionsState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(getSolutions());
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));
    this.current$.subscribe(event => this.getSolutions(event));
    this.filters$ = this.store.select(selectSolutionsHomeFilters);
    this.store.pipe(select(selectSolutionDeploymentsData)).subscribe(() => {
      this.store.dispatch(getSolutionsSilentLoading());
    });
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions, this.gridViewOptionsName));
  }

  getSolutions(filter: string) {
    this.solutions$ = this.store.select(selectFilteredSolutions(FilterNames[filter.toUpperCase()]));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption.option === GridViewSwitchOptionsEnum.grid)
    );
  }
}
