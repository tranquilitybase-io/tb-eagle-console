import { Component, Input, OnInit } from '@angular/core';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { Observable } from 'rxjs';
import { Layout } from '@app/layout/layout.model';
import { Store, select } from '@ngrx/store';
import { LayoutService } from '@app/layout/layout.service';
import { Application } from '../applications.model';
import { DeploymentState } from '@app/shared/shared.model';
import { Loadable } from '@app/shared/shared.reducer';
import { selectStartDeploymentStatus } from '../applications.reducer';

@Component({
  selector: 'app-applications-grid',
  templateUrl: './applications-grid.component.html',
  styleUrls: ['./applications-grid.component.scss'],
})
export class ApplicationsGridComponent implements OnInit {
  @Input() solution: Solution;
  layout$: Observable<Layout>;
  startDeploymentStatus$: Observable<Loadable> = this.store.pipe(select(selectStartDeploymentStatus));

  constructor(private store: Store<any>, private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {}

  get apps(): Array<Application> {
    return this.solution.applications;
  }

  get isSolutionDeployed(): boolean {
    return this.solution.deploymentState === DeploymentState.Success;
  }
}
