import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsModule } from '@app/mission-control/applications/applications.module';

import { SolutionsViewResolver } from '@app/shared/resolvers/solutions-view.resolver';

import { SolutionsViewApplicationsComponent } from './solutions-view-applications/solutions-view-applications.component';
import { SolutionsViewComponent } from './solutions-view.component';
import { SolutionsViewOverviewComponent } from './solutions-view-overview/solutions-view-overview.component';
import { SolutionsViewSelectComponent } from './solutions-view-select/solutions-view-select.component';
import { SolutionsViewWorkspaceInfoComponent } from './solutions-view-workspace-info/solutions-view-workspace-info.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TeamMembersModule } from '@app/administration/team-members/team-members.module';

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
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    TeamMembersModule
  ]
})
export class SolutionsViewModule {}
