import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { lzEnvironmentDeployment } from '../../landing-zone-environment/landing-zone-environment.actions';

@Component({
  selector: 'app-landing-zone-dialog-deploy-env',
  templateUrl: './landing-zone-dialog-deploy-env.component.html',
  styleUrls: ['./landing-zone-dialog-deploy-env.component.scss'],
})
export class LandingZoneDialogDeployEnvComponent {
  constructor(private store: Store<any>, private dialogRef: MatDialogRef<LandingZoneDialogDeployEnvComponent>) {}

  cancel() {
    this.dialogRef.close();
  }

  confirm() {
    this.store.dispatch(lzEnvironmentDeployment());
    this.dialogRef.close();
  }
}
