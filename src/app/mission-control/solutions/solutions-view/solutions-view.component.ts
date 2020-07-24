import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from '../solutions.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DeploymentState } from '@app/shared/shared.model';
import { SolutionsService } from '../solutions.service';
import { Store, select } from '@ngrx/store';
import { selectSolutionDeploymentsData } from '../solutions.reducer';
import { selectApplicationDeploymentsData } from '@app/mission-control/applications/applications.reducer';

@Component({
  selector: 'app-solutions-view',
  templateUrl: './solutions-view.component.html',
  styleUrls: ['./solutions-view.component.scss']
})
export class SolutionsViewComponent implements OnInit {
  current$: Observable<string>;

  solution: Solution = { businessUnit: {}, team: {} } as Solution;

  values = [
    { name: 'Applications', count: 0 },
    { name: 'Workspace', count: 0 }
  ];

  constructor(private solutionsService: SolutionsService, private store: Store<any>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));
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
}
