import { Component, OnInit } from '@angular/core';
import { Solution } from '../solutions.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DeploymentState } from '@app/shared/shared.model';
import { SolutionsService } from '../solutions.service';
import { Store, select } from '@ngrx/store';
import { selectSolutionDeploymentsData } from '../solutions.reducer';
import { selectApplicationDeploymentsData } from '@app/mission-control/applications/applications.reducer';
import { MatSnackBar } from '@angular/material';
import { SolutionUnderCreationComponent } from '@app/shared/snack-bar/solution-under-creation/solution-under-creation.component';
import { startDeployment } from '../solutions.actions';

@Component({
  selector: 'app-solutions-view',
  templateUrl: './solutions-view.component.html',
  styleUrls: ['./solutions-view.component.scss']
})
export class SolutionsViewComponent implements OnInit {
  solution: Solution = { businessUnit: {}, team: {} } as Solution;

  values = [
    { name: 'Applications', count: 0, defaultActive: true },
    { name: 'Workspace', count: 0 }
  ];

  constructor(
    private solutionsService: SolutionsService,
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.pipe(select(selectSolutionDeploymentsData)).subscribe(() => {
      this.updateSolutionData();
    });
    this.store.pipe(select(selectApplicationDeploymentsData)).subscribe(() => {
      this.updateSolutionData();
    });
  }

  updateSolutionData() {
    console.log(this.route.snapshot.queryParamMap.get('id'));
    this.solutionsService.getByKey(this.route.snapshot.queryParamMap.get('id')).subscribe(solution => {
      this.solution = solution;
    });
  }

  get isSolutionDeployed(): boolean {
    return this.solution.deploymentState === DeploymentState.Success;
  }

  get isDeploymentInProgress() {
    return (
      this.solution.deploymentState === DeploymentState.Pending ||
      this.solution.deploymentState === DeploymentState.Started ||
      this.solution.deploymentState === DeploymentState.Retry
    );
  }

  editSolution(): void {
    this.router.navigate(['../edit'], { relativeTo: this.route.parent, queryParams: { id: this.solution.id } });
  }

  deploySolution() {
    this.snackBar.openFromComponent(SolutionUnderCreationComponent);
    this.store.dispatch(startDeployment({ id: this.solution.id }));
  }

  get deploymentStateColor(): string {
    switch (this.solution.deploymentState) {
      case DeploymentState.Success:
        return 'accent';
      case DeploymentState.Failure:
        return 'warn';
      default:
        return 'primary';
    }
  }

  get getDeploymentMessage(): string {
    return 'Deployment ' + this.solution.deploymentState.toLowerCase();
  }
}
