import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatorStoreGrantAccessDialogData } from '../../activator-store.model';
import { denyAccess, grantAccess } from '../../activator-store.actions';

@Component({
  selector: 'app-activator-store-dialog-grant-access',
  templateUrl: './activator-store-dialog-grant-access.component.html',
  styleUrls: ['./activator-store-dialog-grant-access.component.scss']
})
export class ActivatorStoreDialogGrantAccessComponent implements OnInit {
  grantAccessForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private dialogRef: MatDialogRef<ActivatorStoreDialogGrantAccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ActivatorStoreGrantAccessDialogData
  ) {}

  ngOnInit() {
    this.grantAccessForm = this.formBuilder.group({
      teamId: ['', Validators.required]
    });
  }

  get availableTeams(): KeyValue<string, string>[] {
    return this.data.teamList;
  }

  get accessRequestedBy(): string {
    const user = this.data.accessRequestedBy;
    return `${user.firstName} ${user.lastName}`;
  }

  isFieldValid(field: string) {
    return this.grantAccessForm.get(field).touched && !this.grantAccessForm.get(field).valid;
  }

  denyAccess() {
    if (this.grantAccessForm.valid) {
      const teamId = this.grantAccessForm.get('teamId').value;
      this.store.dispatch(denyAccess({ activatorId: this.data.activatorId, teamId }));
      this.dialogRef.close();
    } else {
      this.grantAccessForm.markAllAsTouched();
    }
  }

  grantAccess() {
    if (this.grantAccessForm.valid) {
      const teamId = this.grantAccessForm.get('teamId').value;
      this.store.dispatch(grantAccess({ activatorId: this.data.activatorId, teamId }));
      this.dialogRef.close();
    } else {
      this.grantAccessForm.markAllAsTouched();
    }
  }
}
