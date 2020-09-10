import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsModule } from '@app/mission-control/applications/applications.module';

import { SolutionsViewResolver } from '@app/shared/resolvers/solutions-view.resolver';

import { SolutionsViewComponent } from './solutions-view.component';
import { SolutionsViewSelectComponent } from './solutions-view-select/solutions-view-select.component';
import { SolutionsViewWorkspaceInfoComponent } from './solutions-view-workspace-info/solutions-view-workspace-info.component';

import { MatButtonModule } from '@angular/material/button';
import {
  MatIconModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule,
  MatChipsModule,
  MatListModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { SolutionsViewOverviewComponent } from './solutions-view-overview/solutions-view-overview.component';
import { SolutionsViewApplicationsComponent } from './solutions-view-applications/solutions-view-applications.component';

const routes: Routes = [
  {
    path: '',
    component: SolutionsViewComponent,
    resolve: {
      solution: SolutionsViewResolver
    }
  },
  {
    path: 'application',
    loadChildren: () =>
      import('@app/mission-control/applications/applications-view/applications-view.module').then(
        m => m.ApplicationsViewModule
      )
  }
];

@NgModule({
  declarations: [
    SolutionsViewComponent,
    SolutionsViewSelectComponent,
    SolutionsViewWorkspaceInfoComponent,
    SolutionsViewOverviewComponent,
    SolutionsViewApplicationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ]
})
export class SolutionsViewModule {}
