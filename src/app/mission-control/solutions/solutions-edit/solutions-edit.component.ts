import { Component, OnInit, Input } from '@angular/core';

import { KeyValue } from '@angular/common';
import { SolutionsState } from '../solutions.reducer';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { updateSolution } from '../solutions.actions';
import { Solution } from '../solutions.model';
import { Environment } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.model';
import { DeploymentState } from '@app/shared/shared.model';

@Component({
  selector: 'app-solutions-edit',
  templateUrl: './solutions-edit.component.html',
  styleUrls: ['./solutions-edit.component.scss']
})
export class SolutionsEditComponent implements OnInit {
  solution: Solution;
  solutionForm: FormGroup;

  solutionName: string = '';
  solutionDescription: string = '';
  solutionBU: string = '';

  businessUnitList: KeyValue<string, string>[];
  cdList: KeyValue<string, string>[];
  ciList: KeyValue<string, string>[];
  environmentList: KeyValue<string, string>[];
  sourceControlList: KeyValue<string, string>[];
  teamList: KeyValue<string, string>[];

  constructor(
    private store: Store<SolutionsState>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];
    this.cdList = this.route.snapshot.data['cdList'];
    this.ciList = this.route.snapshot.data['ciList'];
    this.environmentList = this.route.snapshot.data['environmentList'];
    this.sourceControlList = this.route.snapshot.data['sourceControlList'];
    this.teamList = this.route.snapshot.data['teamList'];
    this.solution = this.route.snapshot.data['solution'];

    const environmentIdList = (this.solution.environments as Environment[]).map(env => env.id);

    this.solutionForm = this.formBuilder.group({
      id: this.solution.id,
      name: [this.solution.name],
      description: [this.solution.description],
      businessUnitId: [this.solution.businessUnitId],
      teamId: [this.solution.teamId],
      costCentre: [this.solution.costCentre],
      ci: [this.solution.ci],
      cd: [this.solution.cd],
      sourceControl: [this.solution.sourceControl],
      environments: [environmentIdList]
    });
  }

  get f() {
    return this.solutionForm.controls;
  }

  cancel() {
    this.router.navigateByUrl('/mission-control/solutions');
  }

  onSubmit(solution) {
    this.store.dispatch(updateSolution({ solution }));
    this.router.navigateByUrl('/mission-control/solutions');
  }

  get disableEdit(): boolean {
    return (
      this.solution.deploymentState === DeploymentState.Success ||
      this.solution.deploymentState === DeploymentState.Started ||
      this.solution.deploymentState === DeploymentState.Pending ||
      this.solution.deploymentState === DeploymentState.Retry
    );
  }
}
