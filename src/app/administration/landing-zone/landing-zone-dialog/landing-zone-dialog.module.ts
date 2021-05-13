import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingZoneDialogDeployEnvComponent } from './landing-zone-dialog-deploy-env/landing-zone-dialog-deploy-env.component';
import { LandingZoneDialogDeployEnvEnvironmentErrorComponent } from './landing-zone-dialog-deploy-env-environment-error/landing-zone-dialog-deploy-env-environment-error.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LandingZoneDialogDeployEnvComponent, LandingZoneDialogDeployEnvEnvironmentErrorComponent],
  entryComponents: [LandingZoneDialogDeployEnvComponent, LandingZoneDialogDeployEnvEnvironmentErrorComponent],
  exports: [LandingZoneDialogDeployEnvComponent, LandingZoneDialogDeployEnvEnvironmentErrorComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule],
})
export class LandingZoneDialogModule {}
