import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { ActivatorStoreDetailsComponent } from './activator-store-details.component';
import { ActivatorStoreDetailsOverviewComponent } from './activator-store-details-overview/activator-store-details-overview.component';
import { ActivatorStoreDetailsAuditHistoryComponent } from './activator-store-details-audit-history/activator-store-details-audit-history.component';
import { ActivatorStoreDetailsVersionHistoryComponent } from './activator-store-details-version-history/activator-store-details-version-history.component';
import { ActivatorStoreDetailsUsersComponent } from './activator-store-details-users/activator-store-details-users.component';
import { ActivatorStoreDetailsBillingComponent } from './activator-store-details-billing/activator-store-details-billing.component';

import { ActivatorByIdResolver } from '@app/shared/resolvers/activator-by-id.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: ActivatorStoreDetailsComponent,
    resolve: {
      activator: ActivatorByIdResolver
    }
  }
];

@NgModule({
  declarations: [
    ActivatorStoreDetailsComponent,
    ActivatorStoreDetailsOverviewComponent,
    ActivatorStoreDetailsAuditHistoryComponent,
    ActivatorStoreDetailsVersionHistoryComponent,
    ActivatorStoreDetailsUsersComponent,
    ActivatorStoreDetailsBillingComponent
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
export class ActivatorStoreDetailsModule {}
