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
import { setSelectedSolution, startDeployment } from '../solutions.actions';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchOptionsEnum,
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { Observable } from 'rxjs';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { map, switchMap } from 'rxjs/operators';
import { TeamMember } from '@app/administration/team-members/team-members.model';
import { TeamMembersService } from '@app/administration/team-members/team-members.service';
import { selectUserIsMCAdmin } from '@app/login/login.reducer';

@Component({
  selector: 'app-solutions-view',
  templateUrl: './solutions-view.component.html',
  styleUrls: ['./solutions-view.component.scss'],
})
export class SolutionsViewComponent implements OnInit {
  solution: Solution = { businessUnit: {}, team: {} } as Solution;

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.solutionsView;
  currentGridViewOption$: Observable<string>;

  private tabsIndexMap: Map<string, number>;
  selectedTabIndex: number = 0;

  teamMembers$: Observable<TeamMember[]>;
  userIsMCAdmin$: Observable<boolean>;

  constructor(
    private solutionsService: SolutionsService,
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private teamMembersService: TeamMembersService
  ) {}

  ngOnInit() {
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions(this.gridViewOptionsName)));
    this.tabsIndexMap = new Map([
      ['Overview', 0],
      ['Activators', 1],
      ['TeamMembers', 2],
    ]);
    this.selectedTabIndex = this.getTabIndex(this.route.snapshot.queryParamMap.get('tab'));
    // update solution when using notifications component
    this.route.queryParams
      .pipe(
        switchMap((params) => {
          return this.solutionsService.getByKey(params['id']);
        })
      )
      .subscribe((solution) => {
        this.solution = solution;
        this.teamMembers$ = this.teamMembersService.getByTeamId(solution.teamId);
      });
    this.userIsMCAdmin$ = this.store.pipe(select(selectUserIsMCAdmin));
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
      map((currentGridViewOption) => currentGridViewOption === GridViewSwitchOptionsEnum.grid)
    );
  }

  getTabIndex(tabName: string) {
    return this.tabsIndexMap.get(tabName) ? this.tabsIndexMap.get(tabName) : 0;
  }

  createNewApplication() {
    this.store.dispatch(setSelectedSolution({ solution: this.solution }));
    this.router.navigateByUrl('/mission-control/activator-store');
  }
}
