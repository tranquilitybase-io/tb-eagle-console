import { MatDialog } from '@angular/material/dialog';
import { Loadable } from './../../../shared/shared.reducer';
import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Activator } from './../activator-store.model';
import { selectActivatorData, selectUpdateActivatorStatus } from '../activator-store.reducer';
import { updateActivator } from '../activator-store.actions';
import { ActivatorStoreDialogCreateOnboardingComponent } from '../activator-store-dialog/activator-store-dialog-create-onboarding/activator-store-dialog-create-onboarding.component';
@Component({
  selector: 'app-solutions-create',
  templateUrl: './activator-store-create.component.html',
  styleUrls: ['./activator-store-create.component.scss']
})
export class ActivatorStoreCreateComponent implements OnInit {
  isRegionEdit = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  variablesForm: FormGroup;
  workspaceForm: FormGroup;

  activatorData: Activator;

  cdList: KeyValue<number, string>[];
  ciList: KeyValue<number, string>[];
  environmentList: KeyValue<number, string>[];
  sourceControlList: KeyValue<number, string>[];
  businessUnitList: KeyValue<string, string>[];

  updateActivatorStatus$ = this.store.select(selectUpdateActivatorStatus);

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.store.pipe(select(selectActivatorData)).subscribe(activatorData => {
      this.activatorData = activatorData;
    });
  }

  ngOnInit() {
    let variableGroup = {};
    this.activatorData.activatorMetadata.variables.forEach(variable => {
      variableGroup[variable.name] = new FormControl(variable.value, [Validators.required]);
    });
    this.variablesForm = new FormGroup(variableGroup);

    this.cdList = this.route.snapshot.data['cdList'];
    this.ciList = this.route.snapshot.data['ciList'];
    this.sourceControlList = this.route.snapshot.data['sourceControlList'];
    this.environmentList = this.route.snapshot.data['environmentList'];
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];

    this.workspaceForm = this.formBuilder.group({
      ciId: ['', Validators.required],
      cdId: ['', Validators.required],
      sourceControlId: ['', Validators.required],
      environments: [[], Validators.required],
      businessUnitId: ['', Validators.required],
      regions: [['UK']]
    });

    this.updateActivatorStatus$.subscribe(status => {
      this.handleSubmitStatus(status);
    });
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
    let activator = { ...this.activatorData };
    activator.activatorMetadata.variables.forEach(variable => {
      variable.value = this.variablesForm.value[variable.name];
    });
    activator.cd = [this.workspaceForm.value.cdId];
    activator.ci = [this.workspaceForm.value.ciId];
    activator.sourceControlId = this.workspaceForm.value.sourceControlId;
    activator.envs = this.workspaceForm.value.environments;
    activator.businessUnitId = this.workspaceForm.value.businessUnitId;
    activator.regions = this.workspaceForm.value.regions;
    activator.status = 'Draft';
    return activator;
  }

  onStepTwoNext() {
    if (!this.workspaceForm.valid) {
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
    status.success &&
      this.dialog.open(ActivatorStoreDialogCreateOnboardingComponent, {
        autoFocus: false,
        data: {
          activator: this.activatorData
        }
      });
  }
}
