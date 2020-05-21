import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsModule } from '@app/mission-control/applications/applications.module';

import { SolutionsViewComponent } from './solutions-view.component';
import { SolutionsViewSelectComponent } from './solutions-view-select/solutions-view-select.component';
import { SolutionsViewWorkspaceInfoComponent } from './solutions-view-workspace-info/solutions-view-workspace-info.component';

import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: SolutionsViewComponent
  }
];

@NgModule({
  declarations: [SolutionsViewComponent, SolutionsViewSelectComponent, SolutionsViewWorkspaceInfoComponent],
  imports: [CommonModule, SharedModule, ApplicationsModule, RouterModule.forChild(routes), MatButtonModule]
})
export class SolutionsViewModule {}
