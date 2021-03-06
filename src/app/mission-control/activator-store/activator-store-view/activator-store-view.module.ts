import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { ActivatorByIdResolver } from '@app/shared/resolvers/activator-by-id.resolver';
import { ApplicationsByActivatorIdResolver } from '@app/shared/resolvers/applications-by-activator-id.resolver';
import { TeamResolver } from '@app/shared/resolvers/team.resolver';

import { ActivatorStoreViewAuditHistoryComponent } from './activator-store-view-audit-history/activator-store-view-audit-history.component';
import { ActivatorStoreViewBillingComponent } from './activator-store-view-billing/activator-store-view-billing.component';
import { ActivatorStoreViewComponent } from './activator-store-view.component';
import { ActivatorStoreViewOverviewComponent } from './activator-store-view-overview/activator-store-view-overview.component';
import { ActivatorStoreViewUsersComponent } from './activator-store-view-users/activator-store-view-users.component';
import { ActivatorStoreViewVersionHistoryComponent } from './activator-store-view-version-history/activator-store-view-version-history.component';
import { ApplicationsModule } from '@app/mission-control/applications/applications.module';
import { ApplicationsService } from '@app/mission-control/applications/applications.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

import { ActivatorStoreDialogModule } from '../activator-store-dialog/activator-store-dialog.module';

const routes: Routes = [
  {
    path: '',
    component: ActivatorStoreViewComponent,
    resolve: {
      applications: ApplicationsByActivatorIdResolver,
      activator: ActivatorByIdResolver,
      teamList: TeamResolver,
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
];

@NgModule({
  declarations: [
    ActivatorStoreViewAuditHistoryComponent,
    ActivatorStoreViewBillingComponent,
    ActivatorStoreViewComponent,
    ActivatorStoreViewOverviewComponent,
    ActivatorStoreViewUsersComponent,
    ActivatorStoreViewVersionHistoryComponent,
  ],
  providers: [ApplicationsService],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationsModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    ActivatorStoreDialogModule,
  ],
})
export class ActivatorStoreViewModule {}
