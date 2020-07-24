import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Application } from '../../applications.model';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';

import { AppUnderDeploymentComponent } from '@app/shared/snack-bar/app-under-deployment/app-under-deployment.component';
import { startDeployment } from '../../applications.actions';
import { DeploymentState } from '@app/shared/shared.model';

@Component({
  selector: 'app-applications-grid-card',
  templateUrl: './applications-grid-card.component.html',
  styleUrls: ['./applications-grid-card.component.scss']
})
export class ApplicationsGridCardComponent implements OnInit {
  @Input() app: Application;
  @Input() isSolutionDeployed: boolean;
  active = false;

  constructor(private store: Store<any>, private snackBar: MatSnackBar) {}

  ngOnInit() {}

  sensitivityColor(app): string {
    return String(app.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }

  deploy() {
    this.snackBar.openFromComponent(AppUnderDeploymentComponent);
    this.store.dispatch(startDeployment({ id: this.app.id }));
  }

  get lastUpdated(): Date {
    return new Date(this.app.lastUpdated || null);
  }

  get isDeploymentInProgress() {
    return (
      this.app.deploymentState === DeploymentState.Pending ||
      this.app.deploymentState === DeploymentState.Started ||
      this.app.deploymentState === DeploymentState.Retry
    );
  }

  get isDeploymentStateSuccess(): boolean {
    return this.app.deploymentState === DeploymentState.Success;
  }

  get isDeploymentStateFailure(): boolean {
    return this.app.deploymentState === DeploymentState.Failure;
  }
}
