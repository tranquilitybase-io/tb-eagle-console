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
  solutions$: Observable<Solution[]>;

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

  //#region Use ngrx store/Reducer
  get isAlmostReady() {
    return this.solutionsService.isAlmostReady;
  }

  public DismissAlmostReady() {
    this.solutionsService.isAlmostReady = false;
    this.solutionsService.isReady = true;
  }

  get isReady() {
    return this.solutionsService.isReady;
  }

  public DismissReady() {
    this.solutionsService.isReady = false;
  }
  //#endregion Use ngrx store/Reducer
}
