import { Activator } from './../activator-store.model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { selectActivatorData } from '../activator-store.reducer';
import { updateActivator } from '../activator-store.actions';

@Component({
  selector: 'app-solutions-create',
  templateUrl: './activator-store-create.component.html',
  styleUrls: ['./activator-store-create.component.scss']
})
export class ActivatorStoreCreateComponent implements OnInit {
  variablesForm: FormGroup;
  activatorData: Activator;

  constructor(private store: Store<any>) {
    this.store.pipe(select(selectActivatorData)).subscribe(activatorData => {
      this.activatorData = activatorData;
    });
  }

  ngOnInit() {
    let group = {};
    this.activatorData.activatorMetadata.variables.forEach(variable => {
      group[variable.name] = new FormControl(variable.value, [Validators.required]);
    });
    this.variablesForm = new FormGroup(group);
  }

  get v() {
    return this.variablesForm.controls;
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

  onSubmit() {}
}
