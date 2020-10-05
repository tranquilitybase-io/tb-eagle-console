import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';
import { SolutionsState, selectUpdateSolutionStatus } from '../solutions.reducer';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { updateSolution } from '../solutions.actions';
import { Solution } from '../solutions.model';
import { Environment } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.model';
import { DeploymentState } from '@app/shared/shared.model';
import { MatSnackBar } from '@angular/material';
import { ApiCallStatusComponent } from '@app/shared/snack-bar/api-call-status/api-call-status.component';
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

  updateSolutionStatus$: Observable<Loadable>;

  constructor(
    private store: Store<SolutionsState>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
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
      ciId: [this.solution.ciId],
      cdId: [this.solution.cdId],
      sourceControlId: [this.solution.sourceControlId],
      environments: [environmentIdList]
    });

    this.updateSolutionStatus$ = this.store.pipe(select(selectUpdateSolutionStatus));
    this.updateSolutionStatus$.subscribe(status => {
      this.handleSubmitStatus(status);
    });
  }

  get f() {
    return this.solutionForm.controls;
  }

  cancel() {
    this.router.navigateByUrl('/mission-control/solutions');
  }

  navigateToSolutionsHome() {
    this.router.navigateByUrl('/mission-control/solutions');
  }

  handleSubmitStatus(status: Loadable) {
    console.log(status);
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Solution has been updated', success: true },
        duration: 3500
      });
      this.navigateToSolutionsHome();
    } else if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. Solution has not been updated', success: false },
        duration: 3500
      });
      this.navigateToSolutionsHome();
    }
  }

  onSubmit(solution) {
    this.store.dispatch(updateSolution({ solution }));
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
