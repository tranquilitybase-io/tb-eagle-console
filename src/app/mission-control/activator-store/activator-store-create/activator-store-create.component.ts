import { ActivatorMetadata } from './../activator-store.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { selectActivatorMetaData } from '../activator-store.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solutions-create',
  templateUrl: './activator-store-create.component.html',
  styleUrls: ['./activator-store-create.component.scss']
})
export class ActivatorStoreCreateComponent implements OnInit {
  variablesForm: FormGroup;
  activatorMetadata: ActivatorMetadata;

  constructor(private formBuilder: FormBuilder, private store: Store<any>) {
    this.store.pipe(select(selectActivatorMetaData)).subscribe(activatorMetadata => {
      this.activatorMetadata = activatorMetadata;
    });
  }

  ngOnInit() {
    console.log(this.activatorMetadata);
    let group = {};
    this.activatorMetadata.variables.forEach(variable => {
      group[variable.name] = new FormControl(variable.value, [Validators.required]);
    });
    /*
    this.variablesForm = this.formBuilder.group({
      var: ['',Validators.required]
    })
    */
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

  onNext() {
    if (!this.variablesForm.valid) {
      this.variablesForm.markAllAsTouched();
    }
  }

  onSubmit() {}
}
