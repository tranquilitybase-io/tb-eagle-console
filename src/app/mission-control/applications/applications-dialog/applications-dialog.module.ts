import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsDialogDeployComponent } from './applications-dialog-deploy/applications-dialog-deploy.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [ApplicationsDialogDeployComponent],
  entryComponents: [ApplicationsDialogDeployComponent],
  exports: [ApplicationsDialogDeployComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatListModule, MatChipsModule]
})
export class ApplicationsDialogModule {}
