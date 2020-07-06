import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from '../solutions.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DeploymentState } from '@app/shared/shared.model';

@Component({
  selector: 'app-solutions-view',
  templateUrl: './solutions-view.component.html',
  styleUrls: ['./solutions-view.component.scss']
})
export class SolutionsViewComponent implements OnInit {
  current$: Observable<string>;

  solution: Solution;

  values = [
    { name: 'Applications', count: 0 },
    { name: 'Workspace', count: 0 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.solution = this.route.snapshot.data['solution'];
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));
  }

  get isSolutionDeployed(): boolean {
    return this.solution.deploymentState === DeploymentState.Success;
  }
}
