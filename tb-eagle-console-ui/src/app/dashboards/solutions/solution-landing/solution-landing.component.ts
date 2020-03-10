import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SolutionsService } from '@app/dashboards/solutions/solutions.service';
import { Solution } from '../solutions.model';
import { Store, select } from '@ngrx/store';
import { dismissAlmostReadyAlert, dismissDeploymentReadyAlert } from '../solutions.actions';
import { SolutionsState, selectIsAlmostReady, selectIsDeploymentReady } from '../solutions.reducers';

@Component({
  selector: 'app-solution-landing',
  templateUrl: './solution-landing.component.html',
  styleUrls: ['./solution-landing.component.scss']
})
export class SolutionLandingComponent implements OnInit {
  solutions$: Observable<Solution[]>;

  values = [
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
    this.solutions$ = solutionsService.filteredEntities$;
  }

  ngOnInit() {
    this.solutionsService.getAll();
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));
    this.current$.subscribe(event => this.getSolutions(event));
  }

  getSolutions(filter: string) {
    this.solutionsService.setFilter(filter);
  }

  get isAlmostReady$() {
    return this.store.pipe(select(selectIsAlmostReady));
  }

  public DismissAlmostReady() {
    this.store.dispatch(dismissAlmostReadyAlert());
  }

  get isReady$() {
    return this.store.pipe(select(selectIsDeploymentReady));
  }

  public DismissReady() {
    this.store.dispatch(dismissDeploymentReadyAlert());
  }
}
