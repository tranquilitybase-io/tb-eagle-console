import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingZoneDialogDeployEnvComponent } from './landing-zone-dialog-deploy-env/landing-zone-dialog-deploy-env.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LandingZoneDialogDeployEnvComponent],
  entryComponents: [LandingZoneDialogDeployEnvComponent],
  exports: [LandingZoneDialogDeployEnvComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule]
})
export class LandingZoneDialogModule {}
