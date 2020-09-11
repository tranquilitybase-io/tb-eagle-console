import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SolutionsHomeDialogDeployComponent } from './solutions-home-dialog-deploy/solutions-home-dialog-deploy.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: 'edit',
    loadChildren: () => import('../../solutions-edit/solutions-edit.module').then(m => m.SolutionsViewEditModule)
  }
];

@NgModule({
  declarations: [SolutionsHomeDialogDeployComponent],
  entryComponents: [SolutionsHomeDialogDeployComponent],
  exports: [SolutionsHomeDialogDeployComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatCardModule, RouterModule.forChild(routes)]
})
export class LandingZoneDialogModule {}
