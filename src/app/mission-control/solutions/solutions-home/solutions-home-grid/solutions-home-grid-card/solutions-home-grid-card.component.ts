import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DeploymentState } from '@app/shared/shared.model';
import { MatSnackBar } from '@angular/material';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { SolutionUnderCreationComponent } from '@app/shared/snack-bar/solution-under-creation/solution-under-creation.component';
import { startDeployment } from '@app/mission-control/solutions/solutions.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-solutions-home-grid-card',
  templateUrl: './solutions-home-grid-card.component.html',
  styleUrls: ['./solutions-home-grid-card.component.scss']
})
export class SolutionsHomeGridCardComponent implements OnInit {
  @Input() solution: Solution;

  active = false;

  constructor(private store: Store<any>, private snackBar: MatSnackBar) {}

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
    this.snackBar.openFromComponent(SolutionUnderCreationComponent);
    this.store.dispatch(startDeployment({ id: this.solution.id }));
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
