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

@Component({
  selector: 'app-applications-grid',
  templateUrl: './applications-grid.component.html',
  styleUrls: ['./applications-grid.component.scss']
})
export class ApplicationsGridComponent {
  @Input() solution: Solution;
  layout$: Observable<Layout>;
  userIsAdmin$: Observable<boolean>;

  constructor(private router: Router, private store: Store<any>, private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
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
