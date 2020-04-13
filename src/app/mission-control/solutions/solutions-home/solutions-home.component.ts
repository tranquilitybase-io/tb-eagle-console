import { Component, OnInit } from '@angular/core';
import { Solution } from '../solutions.model';
import { Observable } from 'rxjs';
import { SolutionsService } from '../solutions.service';
import { SolutionsState, selectIsAlmostReady, selectIsDeploymentReady } from '../solutions.reducer';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { dismissAlmostReadyAlert, dismissDeploymentReadyAlert } from '../solutions.actions';

@Component({
  selector: 'app-solutions-home',
  templateUrl: './solutions-home.component.html',
  styleUrls: ['./solutions-home.component.scss']
})
export class SolutionsHomeComponent implements OnInit {
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
