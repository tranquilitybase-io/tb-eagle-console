import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SolutionsService } from '@app/dashboards/solutions/solutions.service';
import { Solution } from '../solutions.model';
import { Store, select } from '@ngrx/store';
import { dismissDeploymentReadyAlert, startSolutionDeployment } from '../solutions.actions';
import { SolutionsState, selectIsDeploymentReady } from '../solutions.reducers';
import { MatSnackBar } from '@angular/material';
import { SolutionCreatedComponent } from '../snack-bar/solution-created/solution-created.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-solution-landing',
  templateUrl: './solution-landing.component.html',
  styleUrls: ['./solution-landing.component.scss']
})
export class SolutionLandingComponent implements OnInit {
  solutions$: Observable<Solution[]>;
  active = false;

  values = [
    { name: 'Favourites', count: 4 },
    { name: 'Active', count: 4 },
    { name: 'Archived', count: 3 }
  ];

  current$: Observable<string>;

  constructor(
    private solutionsService: SolutionsService,
    private store: Store<SolutionsState>,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.solutions$ = solutionsService.filteredEntities$;
  }

  ngOnInit() {
    this.solutionsService.getAll();
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));
    this.current$.subscribe(event => this.getSolutions(event));
    this.store.pipe(select(selectIsDeploymentReady)).subscribe(isReady => {
      if (isReady) {
        this.snackBar
          .openFromComponent(SolutionCreatedComponent)
          .afterDismissed()
          .subscribe(() => {
            this.store.dispatch(dismissDeploymentReadyAlert());
          });
      }
    });
  }

  getSolutions(filter: string) {
    this.solutionsService.setFilter(filter);
  }
}
