import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { createActivatorByURL } from '../../activator-store.actions';
import { selectActivatorData } from '../../activator-store.reducer';

@Component({
  selector: 'app-activator-store-dialog-grant-access',
  templateUrl: './activator-store-dialog-create.component.html',
  styleUrls: ['./activator-store-dialog-create.component.scss']
})
export class ActivatorStoreDialogCreateComponent implements OnInit {
  createActivatorForm: FormGroup;
  URLPattern =
    '((([A-Za-z]{3,9}:(?://)?)(?:[-;:&=+$,w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,w]+@)[A-Za-z0-9.-]+)((?:/[+~%/.w-_]*)???(?:[-+=&;%@.w_]*)#?(?:[w]*))?)';
  activatorId = 0;
  wasOpened = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private dialogRef: MatDialogRef<ActivatorStoreDialogCreateComponent>
  ) {
    this.store.pipe(select(selectActivatorData)).subscribe(activatorData => {
      if (!this.wasOpened) {
        this.activatorId = activatorData.id;
        this.wasOpened = true;
      }
      if (activatorData.id && this.activatorId !== activatorData.id) {
        this.dialogRef.close();
      }
    });
  }

  ngOnInit() {
    this.createActivatorForm = this.formBuilder.group({
      url: ['', [Validators.required]]
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

  closeDialogOnSuccess(activatorMetadata) {
    if (Object.keys(activatorMetadata).length) {
      this.dialogRef.close();
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
