import { Component, OnInit } from '@angular/core';
import { Solution } from '../solutions.model';
import { Observable } from 'rxjs';
import { SolutionsService } from '../solutions.service';
import { SolutionsState, selectIsDeploymentReady, selectSolutionDeploymentsData } from '../solutions.reducer';
import { Store, select } from '@ngrx/store';
import { dismissDeploymentReadyAlert } from '../solutions.actions';
import { MatSnackBar } from '@angular/material';
import { SolutionCreatedComponent } from '@app/shared/snack-bar/solution-created/solution-created.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-solutions-home',
  templateUrl: './solutions-home.component.html',
  styleUrls: ['./solutions-home.component.scss']
})
export class SolutionsHomeComponent implements OnInit {
  solutions$: Observable<Solution[]>;
  active = false;

  values = [{ name: 'Favourites' }, { name: 'Actives' }, { name: 'Archived' }];

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
    this.store.pipe(select(selectSolutionDeploymentsData)).subscribe(() => {
      this.solutionsService.getAll();
    });
  }

  getSolutions(filter: string) {
    this.solutionsService.setFilter(filter);
  }
}
