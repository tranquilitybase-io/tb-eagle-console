import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DeploymentState } from '@app/shared/shared.model';
import { MatSnackBar } from '@angular/material';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { SolutionsHomeDialogDeployComponent } from '../../solutions-home-dialog/solutions-home-dialog-deploy/solutions-home-dialog-deploy.component';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solutions-home-grid-card',
  templateUrl: './solutions-home-grid-card.component.html',
  styleUrls: ['./solutions-home-grid-card.component.scss']
})
export class SolutionsHomeGridCardComponent implements OnInit {
  @Input() solution: Solution;

  active = false;
  layout$: Observable<Layout>;

  constructor(
    private store: Store<any>,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private layoutService: LayoutService
  ) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {}

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }

  deploy() {
    this.dialog.open(SolutionsHomeDialogDeployComponent, { disableClose: true, autoFocus: false, data: this.solution });
  }

  get isDeploymentInProgress() {
    return (
      this.solution.deploymentState === DeploymentState.Pending ||
      this.solution.deploymentState === DeploymentState.Started ||
      this.solution.deploymentState === DeploymentState.Retry
    );
  }

  get isDeploymentStateSuccess(): boolean {
    return this.solution.deploymentState === DeploymentState.Success;
  }

  get deploymentStateColor(): string {
    switch (this.solution.deploymentState) {
      case DeploymentState.Failure:
        return 'warn';
      case DeploymentState.Pending:
      case DeploymentState.Started:
      case DeploymentState.Retry:
        return 'primary';
      case DeploymentState.Removed:
      case DeploymentState.Revoked:
        return '';
      case DeploymentState.Success:
        return 'accent';
    }
  }
}
