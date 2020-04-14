import { Component, OnInit } from '@angular/core';
import { Solution } from '../solutions.model';
import { Observable } from 'rxjs';
import { SolutionsService } from '../solutions.service';
import { SolutionsState, selectIsDeploymentReady } from '../solutions.reducer';
import { Store, select } from '@ngrx/store';
import { dismissDeploymentReadyAlert } from '../solutions.actions';
import { MatSnackBar } from '@angular/material';
import { SolutionCreatedComponent } from '@app/shared/snack-bar/solution-created/solution-created.component';

@Component({
  selector: 'app-solutions-home',
  templateUrl: './solutions-home.component.html',
  styleUrls: ['./solutions-home.component.scss']
})
export class SolutionsHomeComponent implements OnInit {
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
