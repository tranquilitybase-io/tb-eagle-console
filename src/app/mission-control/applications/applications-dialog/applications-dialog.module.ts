import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsDialogDeployComponent } from './applications-dialog-deploy/applications-dialog-deploy.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ApplicationsDialogDeployComponent],
  entryComponents: [ApplicationsDialogDeployComponent],
  exports: [ApplicationsDialogDeployComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatCardModule]
})
export class ApplicationsDialogModule {}
