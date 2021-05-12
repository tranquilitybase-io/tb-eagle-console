import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Loadable } from '../../../shared/shared.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { KeyValue } from '@angular/common';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Activator } from '../activator-store.model';
import { selectActivatorData, selectUpdateActivatorStatus } from '../activator-store.reducer';
import { resetAPICallStatuses, updateActivator } from '../activator-store.actions';
import { ActivatorStoreDialogCreateOnboardingComponent } from '../activator-store-dialog/activator-store-dialog-create-onboarding/activator-store-dialog-create-onboarding.component';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-solutions-create',
  templateUrl: './activator-store-edit.component.html',
  styleUrls: ['./activator-store-edit.component.scss'],
})
export class ActivatorStoreEditComponent implements OnInit, OnDestroy {
  activator: Activator = {} as Activator;
  reviewActivatorData: Activator;
  isRegionEdit = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  variablesForm: FormGroup;
  workspaceForm: FormGroup;

  cdList: KeyValue<number, string>[];
  ciList: KeyValue<number, string>[];
  environmentList: KeyValue<number, string>[];
  sourceControlList: KeyValue<number, string>[];
  businessUnitList: KeyValue<string, string>[];

  subscription: Subscription;
  updateActivatorStatus: Loadable;

  onboardDialogOpened = false;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.store.dispatch(resetAPICallStatuses());
    this.activator = this.route.snapshot.data['activator'] as Activator;
    this.reviewActivatorData = this.route.snapshot.data['activator'] as Activator;

    let variableGroup = {};

    this.activator.activatorMetadata.variables.forEach((variable) => {
      variableGroup[variable.name] = new FormControl(variable.value, variable.isOptional ? [] : Validators.required);
    });
    this.variablesForm = new FormGroup(variableGroup);

    this.cdList = this.route.snapshot.data['cdList'];
    this.ciList = this.route.snapshot.data['ciList'];
    this.sourceControlList = this.route.snapshot.data['sourceControlList'];
    this.environmentList = this.route.snapshot.data['environmentList'];
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];

    this.workspaceForm = this.formBuilder.group({
      ciId: [this.getCiId(), Validators.required],
      cdId: [this.getCdId(), Validators.required],
      sourceControlId: [this.activator.sourceControlId, Validators.required],
      environments: [this.activator.envs.map((envs) => envs.id), Validators.required],
      businessUnitId: [this.activator.businessUnitId, Validators.required],
      regions: [['UK']],
    });
    this.subscription = this.store.select(selectUpdateActivatorStatus).subscribe((status) => {
      this.updateActivatorStatus = status;
      this.handleSubmitStatus(status);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get v() {
    return this.variablesForm.controls;
  }

  get w() {
    return this.workspaceForm.controls;
  }

  /*
   * Variables step functions
   */

  getCiId() {
    return this.activator.ci && this.activator.ci[0] && this.activator.ci[0].id ? this.activator.ci[0].id : '';
  }

  getCdId() {
    return this.activator.cd && this.activator.cd[0] && this.activator.cd[0].id ? this.activator.cd[0].id : '';
  }

  isFieldValid(field: string) {
    return this.variablesForm.get(field).touched && !this.variablesForm.get(field).valid;
  }

  unSlugify(string) {
    const unslugifiedString = string.replaceAll('_', ' ');
    return unslugifiedString.charAt(0).toUpperCase() + unslugifiedString.slice(1);
  }

  onStepOneNext() {
    if (this.variablesForm.valid) {
      // this.store.dispatch(updateActivator({ activatorData: activator }));
    } else {
      this.variablesForm.markAllAsTouched();
    }
  }

  /*
   * Workspace step functions
   */

  removeRegion(region: string): void {
    const index = this.workspaceForm.controls.regions.value.indexOf(region);
    if (index >= 0) {
      this.workspaceForm.controls.regions.value.splice(index, 1);
    }
  }

  addRegion(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.workspaceForm.controls.regions.value.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  private parseActivatorFormsValuesToSend(): Activator {
    let activator = JSON.parse(JSON.stringify(this.activator));
    activator.activatorMetadata.variables = activator.activatorMetadata.variables.map((variable) => ({
      ...variable,
      value: this.variablesForm.value[variable.name],
    }));
    activator.cd = [this.workspaceForm.value.cdId];
    activator.ci = [this.workspaceForm.value.ciId];
    activator.sourceControlId = this.workspaceForm.value.sourceControlId;
    activator.envs = this.workspaceForm.value.environments;
    activator.businessUnitId = this.workspaceForm.value.businessUnitId;
    activator.regions = this.workspaceForm.value.regions;
    activator.status = 'Draft';
    return activator;
  }

  private parsedActivatorFormsValuesToReview(): Activator {
    let activator = JSON.parse(JSON.stringify(this.activator));
    activator.activatorMetadata.variables = activator.activatorMetadata.variables.map((variable) => ({
      ...variable,
      value: this.variablesForm.value[variable.name],
    }));
    const cd = [this.workspaceForm.value.cdId].map((cdId) => this.cdList.find((cd) => cd.key === cdId));
    activator.cd = cd.map((cd) => ({ id: cd.key, value: cd.value }));
    const ci = [this.workspaceForm.value.ciId].map((ciId) => this.ciList.find((ci) => ci.key === ciId));
    activator.ci = ci.map((ci) => ({ id: ci.key, value: ci.value }));
    const sourceControl = this.sourceControlList.find(
      (source) => source.key === this.workspaceForm.value.sourceControlId
    );
    activator.sourceControl = { id: sourceControl.key, value: sourceControl.value };

    const environments = this.workspaceForm.value.environments.map((envId) =>
      this.environmentList.find((env) => env.key === envId)
    );
    activator.envs = environments.map((env) => ({ id: env.id, name: env.value }));
    const businessUnit = this.businessUnitList.find(
      (business) => business.key === this.workspaceForm.value.businessUnitId
    );
    activator.businessUnit = { id: 0, name: businessUnit.value, description: '', isActive: false };
    activator.regions = this.workspaceForm.value.regions;
    activator.status = 'Draft';
    return activator;
  }

  onStepTwoNext() {
    if (this.workspaceForm.valid) {
      this.reviewActivatorData = this.parsedActivatorFormsValuesToReview();
    } else {
      this.workspaceForm.markAllAsTouched();
    }
  }

  /*
   * Review step functions
   */

  onSubmit() {
    if (this.variablesForm.valid && this.workspaceForm.valid) {
      this.store.dispatch(updateActivator({ activatorData: this.parseActivatorFormsValuesToSend() }));
    }
    // this.router.navigate(['/mission-control/activator-store/view', { queryParams: { id: this.activatorData.id } }]);
  }

  handleSubmitStatus(status: Loadable) {
    if (status.success && !this.onboardDialogOpened) {
      this.onboardDialogOpened = true;
      this.dialog.open(ActivatorStoreDialogCreateOnboardingComponent, {
        autoFocus: false,
        data: {
          activator: this.activator,
          redirect: true,
        },
      });
    }
  }
}
