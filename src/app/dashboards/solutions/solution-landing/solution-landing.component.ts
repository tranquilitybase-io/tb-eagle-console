import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SolutionsService } from '@app/dashboards/solutions/solutions.service';
import { Solution } from '../solutions.model';
import { Store, select } from '@ngrx/store';
import { dismissDeploymentReadyAlert, startSolutionDeployment } from '../solutions.actions';
import { SolutionsState, selectIsDeploymentReady } from '../solutions.reducers';
import { MatSnackBar } from '@angular/material';
import { SolutionUnderCreationComponent } from '../snack-bar/solution-under-creation/solution-under-creation.component';
import { SolutionCreatedComponent } from '../snack-bar/solution-created/solution-created.component';

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

  constructor(
    private solutionsService: SolutionsService,
    private store: Store<SolutionsState>,
    private snackBar: MatSnackBar
  ) {
    this.solutions$ = solutionsService.filteredEntities$;
  }

  ngOnInit() {
    this.solutionsService.getAll();
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
}
