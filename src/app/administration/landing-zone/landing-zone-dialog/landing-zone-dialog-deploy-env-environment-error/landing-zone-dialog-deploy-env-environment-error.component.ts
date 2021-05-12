import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-landing-zone-dialog-deploy-env',
  templateUrl: './landing-zone-dialog-deploy-env-environment-error.component.html',
  styleUrls: ['./landing-zone-dialog-deploy-env-environment-error.component.scss'],
})
export class LandingZoneDialogDeployEnvEnvironmentErrorComponent {
  constructor(private dialogRef: MatDialogRef<LandingZoneDialogDeployEnvEnvironmentErrorComponent>) {}

  confirm() {
    this.dialogRef.close();
  }
}
