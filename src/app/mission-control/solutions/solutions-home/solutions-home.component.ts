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
  filterFavouritesLength = 0;
  filterActivesLength = 0;
  filterArchivedLength = 0;

  filters: SwitchFilter[] = [
    { name: 'Favourites', count: 0, isActive: false },
    { name: 'Actives', count: 0, isActive: true },
    { name: 'Archived', count: 0, isActive: false }
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
    this.filterFavouritesLength = solutions.filter(solution => solution.isFavourite).length;
    this.filterActivesLength = solutions.filter(solution => solution.isActive).length;
    this.filterArchivedLength = solutions.filter(solution => !solution.isActive).length;

    this.filters = [
      { name: 'Favourites', count: this.filterFavouritesLength, isActive: false },
      { name: 'Actives', count: this.filterActivesLength, isActive: true },
      { name: 'Archived', count: this.filterArchivedLength, isActive: false }
    ];
  }

  getSolutions(filter: string) {
    this.solutionsService.setFilter(filter);
  }
}
