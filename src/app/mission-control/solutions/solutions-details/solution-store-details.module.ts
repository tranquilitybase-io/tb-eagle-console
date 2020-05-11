import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { SolutionDetailsComponent } from './activator-store-details.component';
import { SolutionDetailsAuditHistoryComponent } from './activator-store-details-audit-history/activator-store-details-audit-history.component';
import { SolutionDetailsVersionHistoryComponent } from './activator-store-details-version-history/activator-store-details-version-history.component';
import { SolutionDetailsUsersComponent } from './activator-store-details-users/activator-store-details-users.component';
import { SolutionDetailsBillingComponent } from './activator-store-details-billing/activator-store-details-billing.component';

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
    component: SolutionDetailsComponent,
    resolve: {
      activator: ActivatorByIdResolver
    }
  }
];

@NgModule({
  declarations: [
    SolutionDetailsComponent,
    SolutionDetailsAuditHistoryComponent,
    SolutionDetailsVersionHistoryComponent,
    SolutionDetailsUsersComponent,
    SolutionDetailsBillingComponent
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
export class SolutionDetailsModule {}
