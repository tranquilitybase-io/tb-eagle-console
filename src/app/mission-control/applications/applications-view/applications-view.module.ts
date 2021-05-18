import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationByIdResolver } from '@app/shared/resolvers/application-by-id.resolver';

import { ApplicationsViewAuditHistoryComponent } from './applications-view-audit-history/applications-view-audit-history.component';
import { ApplicationsViewBillingComponent } from './applications-view-billing/applications-view-billing.component';
import { ApplicationsViewComponent } from './applications-view.component';
import { ApplicationsViewOverviewComponent } from './applications-view-overview/applications-view-overview.component';
import { ApplicationsViewUsersComponent } from './applications-view-users/applications-view-users.component';
import { ApplicationsViewVersionHistoryComponent } from './applications-view-version-history/applications-view-version-history.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: ApplicationsViewComponent,
    resolve: {
      application: ApplicationByIdResolver,
    },
  },
];

@NgModule({
  declarations: [
    ApplicationsViewAuditHistoryComponent,
    ApplicationsViewBillingComponent,
    ApplicationsViewComponent,
    ApplicationsViewOverviewComponent,
    ApplicationsViewUsersComponent,
    ApplicationsViewVersionHistoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
  ],
})
export class ApplicationsViewModule {}
