import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-activator-store-dialog-grant-access',
  templateUrl: './activator-store-dialog-create.component.html',
  styleUrls: ['./activator-store-dialog-create.component.scss']
})
export class ActivatorStoreDialogCreateComponent implements OnInit {
  createActivatorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private dialogRef: MatDialogRef<ActivatorStoreDialogCreateComponent>
  ) {}

  ngOnInit() {
    this.createActivatorForm = this.formBuilder.group({
      url: ['', Validators.required]
    });
  }

  isFieldValid(field: string) {
    return this.createActivatorForm.get(field).touched && !this.createActivatorForm.get(field).valid;
  }

  createActivator() {
    if (this.createActivatorForm.valid) {
      //this.store.dispatch(grantAccess({ activatorId: this.data.activatorId, teamId }));
    } else {
      this.createActivatorForm.markAllAsTouched();
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
