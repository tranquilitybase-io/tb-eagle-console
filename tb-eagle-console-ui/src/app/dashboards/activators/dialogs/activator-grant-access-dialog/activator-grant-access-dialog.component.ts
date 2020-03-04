import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MissingAvailableSolutionsDialogComponent } from '../missing-available-solutions-dialog/missing-available-solutions-dialog.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { ActivatorGrantAccessDialogData } from '../../activators.model';
import { Store } from '@ngrx/store';
import { denyAccess, grantAccess } from '../../activators.actions';

@Component({
  selector: 'app-activator-grant-access-dialog',
  templateUrl: './activator-grant-access-dialog.component.html',
  styleUrls: ['./activator-grant-access-dialog.component.scss']
})
export class ActivatorGrantAccessDialogComponent implements OnInit {
  grantAccessForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>,
    private dialogRef: MatDialogRef<MissingAvailableSolutionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ActivatorGrantAccessDialogData
  ) {}

  ngOnInit() {
    this.grantAccessForm = this.formBuilder.group({
      teamId: ['', Validators.required]
    });
  }

  get availableTeams(): KeyValue<string, string>[] {
    return this.data.teamList;
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
