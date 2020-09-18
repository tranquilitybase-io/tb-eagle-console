import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Application } from '../../applications.model';
import { DeploymentState } from '@app/shared/shared.model';
import { MatDialog } from '@angular/material';
import { ApplicationsDialogDeployComponent } from '../../applications-dialog/applications-dialog-deploy/applications-dialog-deploy.component';
@Component({
  selector: 'app-applications-grid-card',
  templateUrl: './applications-grid-card.component.html',
  styleUrls: ['./applications-grid-card.component.scss']
})
export class ApplicationsGridCardComponent implements OnInit {
  @Input() app: Application;
  @Input() isSolutionDeployed: boolean;
  active = false;

  constructor(private dialog: MatDialog) {}

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
    this.dialog.open(ApplicationsDialogDeployComponent, { disableClose: true, autoFocus: false, data: this.app });
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
