import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { SolutionsState, selectUpdateSolutionStatus } from '../solutions.reducer';
import { resetUpdateSolutionStatus } from './../solutions.actions';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { updateSolution } from '../solutions.actions';
import { Solution } from '../solutions.model';
import { Environment } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.model';
import { DeploymentState } from '@app/shared/shared.model';
import { Loadable } from '@app/shared/shared.reducer';

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

  updateSolutionStatus$: Observable<Loadable> = this.store.select(selectUpdateSolutionStatus);

  constructor(
    private store: Store<SolutionsState>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.store.dispatch(resetUpdateSolutionStatus());
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
      ciId: [this.solution.ciId],
      cdId: [this.solution.cdId],
      sourceControlId: [this.solution.sourceControlId],
      isSandbox: [this.solution.isSandbox],
      environments: [environmentIdList]
    });

    this.updateSolutionStatus$.subscribe(status => this.handleLoading(status));
  }

  private handleLoading = (status: Loadable) => {
    status.success && this.navigateToSolutionsHome();
    status.loading ? this.solutionForm.disable() : this.solutionForm.enable();
  };

  get f() {
    return this.solutionForm.controls;
  }

  cancel() {
    this.router.navigateByUrl('/mission-control/solutions');
  }

  navigateToSolutionsHome() {
    this.router.navigateByUrl('/mission-control/solutions');
  }

  onIsSandboxCheck({ checked }) {
    this.solutionForm.markAsUntouched();
    if (checked) {
      this.solutionForm.controls['ciId'].setValue(0);
      this.solutionForm.controls['cdId'].setValue(0);
      this.solutionForm.controls['sourceControlId'].setValue(0);
      this.solutionForm.controls['environments'].setValue([]);
    } else {
      this.solutionForm.controls['ciId'].setValue('');
      this.solutionForm.controls['cdId'].setValue('');
      this.solutionForm.controls['sourceControlId'].setValue('');
      this.solutionForm.controls['environments'].setValue([]);
    }
  }

  onSubmit(solution) {
    if (this.solutionForm.valid) {
      this.store.dispatch(updateSolution({ solution }));
    } else {
      this.solutionForm.markAllAsTouched();
    }
  }

  get disableEdit(): boolean {
    return (
      this.solution.deploymentState === DeploymentState.Success ||
      this.solution.deploymentState === DeploymentState.Started ||
      this.solution.deploymentState === DeploymentState.Pending ||
      this.solution.deploymentState === DeploymentState.Retry
    );
  }

  get isSandbox(): boolean {
    return this.solutionForm.get('isSandbox').value;
  }
}
