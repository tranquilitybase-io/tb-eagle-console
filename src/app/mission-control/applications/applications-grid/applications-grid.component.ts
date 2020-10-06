import { Component, Input, OnInit } from '@angular/core';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { Observable } from 'rxjs';
import { Layout } from '@app/shared/layout/layout.model';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Application } from '../applications.model';
import { setSelectedSolution } from '@app/mission-control/solutions/solutions.actions';
import { DeploymentState } from '@app/shared/shared.model';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { Loadable } from '@app/shared/shared.reducer';
import { selectStartDeploymentStatus } from '../applications.reducer';
import { ApiCallStatusComponent } from '@app/shared/snack-bar/api-call-status/api-call-status.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-applications-grid',
  templateUrl: './applications-grid.component.html',
  styleUrls: ['./applications-grid.component.scss']
})
export class ApplicationsGridComponent implements OnInit {
  @Input() solution: Solution;
  layout$: Observable<Layout>;
  userIsAdmin$: Observable<boolean>;
  startDeploymentStatus$: Observable<Loadable>;

  constructor(
    private router: Router,
    private store: Store<any>,
    private layoutService: LayoutService,
    private snackBar: MatSnackBar
  ) {
    this.layout$ = this.layoutService.layoutObserver$;
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
  }

  ngOnInit() {
    this.startDeploymentStatus$ = this.store.pipe(select(selectStartDeploymentStatus));
    this.startDeploymentStatus$.subscribe(status => {
      this.handleStatusChange(status);
    });
  }

  handleStatusChange(status: Loadable) {
    /*    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: ' Application has been deployed', success: false },
        duration: 3500
      });
    } */
    if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. Application has not been deployed', success: false },
        duration: 3500
      });
    }
  }

  get apps(): Array<Application> {
    return this.solution.applications;
  }

  get isSolutionDeployed(): boolean {
    return this.solution.deploymentState === DeploymentState.Success;
  }

  createNewApplication() {
    this.store.dispatch(setSelectedSolution({ solution: this.solution }));
    this.router.navigateByUrl('/mission-control/activator-store');
  }
}
