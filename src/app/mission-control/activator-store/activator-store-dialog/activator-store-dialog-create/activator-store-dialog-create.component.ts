import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createActivatorByURL } from '../../activator-store.actions';
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
      url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    });
  }

  createActivator() {
    console.log(this.createActivatorForm);
    if (this.createActivatorForm.valid) {
      this.store.dispatch(createActivatorByURL({ url: this.createActivatorForm.value.url }));
    } else {
      this.createActivatorForm.markAllAsTouched();
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
