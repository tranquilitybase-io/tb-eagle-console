import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SolutionsService } from '@app/dashboards/solutions/solutions.service';
import { Solution } from '../interfaces';
import { Store, select } from '@ngrx/store';
import { refreshSolutions } from '../solutions.actions';
import { selectVisibleSolutions, SolutionsState, selectFeature } from '../solutions.reducers';

@Component({
  selector: 'app-solution-landing',
  templateUrl: './solution-landing.component.html',
  styleUrls: ['./solution-landing.component.scss']
})
export class SolutionLandingComponent implements OnInit {
  solutions: Observable<Solution[]>;

  private values = [
    { name: 'Favourites', count: 4 },
    { name: 'Active', count: 4 },
    { name: 'Archived', count: 3 }
  ];

  current$: Observable<string>;
  event: string;

  constructor(
    private solutionsService: SolutionsService,
    private store: Store<SolutionsState>,
    private route: ActivatedRoute
  ) {
    this.solutions = solutionsService.entities$;
  }

  ngOnInit() {
    this.solutionsService.getAll();
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));
    this.current$.subscribe(event => this.getSolutions(event));
  }

  getSolutions(filter: string) {
    this.store.dispatch(refreshSolutions({ filter }));
    this.solutions = this.store.pipe(select(selectVisibleSolutions));
  }
}
