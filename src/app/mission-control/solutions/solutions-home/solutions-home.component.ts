import { Component, OnInit } from '@angular/core';
import { Solution } from '../solutions.model';
import { Observable } from 'rxjs';
import { SolutionsService } from '../solutions.service';
import { SolutionsState, selectSolutionDeploymentsData } from '../solutions.reducer';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SwitchFilter } from '@app/shared/switches/switches.model';

@Component({
  selector: 'app-solutions-home',
  templateUrl: './solutions-home.component.html',
  styleUrls: ['./solutions-home.component.scss']
})
export class SolutionsHomeComponent implements OnInit {
  solutions$: Observable<Solution[]>;
  active = false;

  filters: SwitchFilter[] = [
    { name: 'Favourites', count: 0, defaultActive: false },
    { name: 'Actives', count: 0, defaultActive: true },
    { name: 'Archived', count: 0, defaultActive: false }
  ];

  current$: Observable<string>;

  constructor(
    private solutionsService: SolutionsService,
    private store: Store<SolutionsState>,
    private route: ActivatedRoute
  ) {
    this.solutions$ = solutionsService.filteredEntities$;
  }

  ngOnInit() {
    this.solutionsService.getAll().subscribe(this.numberingUpdate.bind(this));
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));
    this.current$.subscribe(event => this.getSolutions(event));
    this.store.pipe(select(selectSolutionDeploymentsData)).subscribe(() => {
      this.solutionsService.getAll().subscribe(this.numberingUpdate.bind(this));
    });
  }

  numberingUpdate(solutions: Solution[]) {
    let filterFavouritesLength = solutions.filter(solution => solution.isFavourite).length;
    let filterActivesLength = solutions.filter(solution => solution.isActive).length;
    let filterArchivedLength = solutions.filter(solution => !solution.isActive).length;

    this.filters = [
      { name: 'Favourites', count: filterFavouritesLength, defaultActive: false },
      { name: 'Actives', count: filterActivesLength, defaultActive: true },
      { name: 'Archived', count: filterArchivedLength, defaultActive: false }
    ];
  }

  getSolutions(filter: string) {
    filter && this.solutionsService.setFilter(filter);
  }
}
