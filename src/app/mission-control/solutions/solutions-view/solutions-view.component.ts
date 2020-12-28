import { Component, OnInit } from '@angular/core';
import { Solution } from '../solutions.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DeploymentState } from '@app/shared/shared.model';
import { SolutionsService } from '../solutions.service';
import { Store, select } from '@ngrx/store';
import { selectSolutionDeploymentsData } from '../solutions.reducer';
import { selectApplicationDeploymentsData } from '@app/mission-control/applications/applications.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SolutionUnderCreationComponent } from '@app/shared/snack-bar/solution-under-creation/solution-under-creation.component';
import { startDeployment } from '../solutions.actions';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchModel,
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { Observable } from 'rxjs';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { map, switchMap } from 'rxjs/operators';
import { TeamMember } from '@app/administration/team-members/team-members.model';
import { TeamMembersService } from '@app/administration/team-members/team-members.service';

@Component({
  selector: 'app-solutions-view',
  templateUrl: './solutions-view.component.html',
  styleUrls: ['./solutions-view.component.scss']
})
export class SolutionsViewComponent implements OnInit {
  solution: Solution = { businessUnit: {}, team: {} } as Solution;

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.solutionsView;
  currentGridViewOption$: Observable<GridViewSwitchModel>;

  private tabsIndexMap: Map<string, number>;
  selectedTabIndex: number = 0;

  teamMembers$: Observable<TeamMember[]>;

  constructor(
    private solutionsService: SolutionsService,
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private teamMembersService: TeamMembersService
  ) {}

  ngOnInit() {
    this.store.pipe(select(selectSolutionDeploymentsData)).subscribe(() => {
      this.updateSolutionData();
    });
    this.store.pipe(select(selectApplicationDeploymentsData)).subscribe(() => {
      this.updateSolutionData();
    });
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions, this.gridViewOptionsName));
    this.tabsIndexMap = new Map([
      ['Overview', 0],
      ['Activators', 1],
      ['TeamMembers', 2]
    ]);
    this.selectedTabIndex = this.getTabIndex(this.route.snapshot.queryParamMap.get('tab'));
    // update solution when using notifications component
    this.route.queryParams
      .pipe(
        switchMap(params => {
          return this.solutionsService.getByKey(params['id']);
        })
      )
      .subscribe(solution => {
        this.solution = solution;
        this.teamMembers$ = this.teamMembersService.getByTeamId(solution.teamId);
      });
  }

  updateSolutionData() {
    console.log(this.route.snapshot.queryParamMap.get('id'));
    this.solutionsService.getByKey(this.route.snapshot.queryParamMap.get('id')).subscribe(solution => {
      this.solution = solution;
      this.teamMembers$ = this.teamMembersService.getByTeamId(solution.teamId);
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

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption.option === GridViewSwitchOptionsEnum.grid)
    );
  }

  getTabIndex(tabName: string) {
    return this.tabsIndexMap.get(tabName) ? this.tabsIndexMap.get(tabName) : 0;
  }
}
