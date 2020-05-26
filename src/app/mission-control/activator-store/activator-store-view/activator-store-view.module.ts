import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationByIdResolver } from '@app/shared/resolvers/application-by-id.resolver';

import { ActivatorStoreViewAuditHistoryComponent } from './activator-store-view-audit-history/activator-store-view-audit-history.component';
import { ActivatorStoreViewBillingComponent } from './activator-store-view-billing/activator-store-view-billing.component';
import { ActivatorStoreViewComponent } from './activator-store-view.component';
import { ActivatorStoreViewOverviewComponent } from './activator-store-view-overview/activator-store-view-overview.component';
import { ActivatorStoreViewUsersComponent } from './activator-store-view-users/activator-store-view-users.component';
import { ActivatorStoreViewVersionHistoryComponent } from './activator-store-view-version-history/activator-store-view-version-history.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: ActivatorStoreViewComponent,
    resolve: {
      application: ApplicationByIdResolver
    }
  }
];

@NgModule({
  declarations: [
    ActivatorStoreViewAuditHistoryComponent,
    ActivatorStoreViewBillingComponent,
    ActivatorStoreViewComponent,
    ActivatorStoreViewOverviewComponent,
    ActivatorStoreViewUsersComponent,
    ActivatorStoreViewVersionHistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule
  ]
})
export class ActivatorStoreViewModule {}
