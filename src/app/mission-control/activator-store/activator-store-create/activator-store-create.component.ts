import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Activator } from './../activator-store.model';
import { selectActivatorData } from '../activator-store.reducer';
import { updateActivator } from '../activator-store.actions';

@Component({
  selector: 'app-solutions-create',
  templateUrl: './activator-store-create.component.html',
  styleUrls: ['./activator-store-create.component.scss']
})
export class ActivatorStoreCreateComponent implements OnInit {
  variablesForm: FormGroup;
  workspaceForm: FormGroup;

  activatorData: Activator;

  cdList: KeyValue<number, string>[];
  ciList: KeyValue<number, string>[];
  environmentList: KeyValue<number, string>[];
  sourceControlList: KeyValue<number, string>[];

  constructor(private store: Store<any>, private formBuilder: FormBuilder, private route: ActivatedRoute) {
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

    this.workspaceForm = this.formBuilder.group({
      ciId: ['', Validators.required],
      cdId: ['', Validators.required],
      sourceControlId: ['', Validators.required],
      environments: [[]]
    });
  }

  get v() {
    return this.variablesForm.controls;
  }

  get w() {
    return this.workspaceForm.controls;
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
      let activator = { ...this.activatorData };
      activator.activatorMetadata.variables.forEach(variable => {
        variable.value = this.variablesForm.value[variable.name];
      });
      this.store.dispatch(updateActivator({ activatorData: activator }));
    } else {
      this.variablesForm.markAllAsTouched();
    }
  }

  onStepTwoNext() {
    if (this.workspaceForm.valid) {
      let activator = { ...this.activatorData };
      this.store.dispatch(updateActivator({ activatorData: activator }));
    } else {
      this.workspaceForm.markAllAsTouched();
    }
  }

  onSubmit() {}
}
