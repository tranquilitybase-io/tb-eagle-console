import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { SolutionsDetailsComponent } from './solutions-details.component';
import { SolutionsDetailsAuditHistoryComponent } from './solutions-details-audit-history/solutions-details-audit-history.component';
import { SolutionsDetailsVersionHistoryComponent } from './solutions-details-version-history/solutions-details-version-history.component';
import { SolutionsDetailsUsersComponent } from './solutions-details-users/solutions-details-users.component';
import { SolutionsDetailsBillingComponent } from './solutions-details-billing/solutions-details-billing.component';

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
    component: SolutionsDetailsComponent,
    resolve: {
      activator: ActivatorByIdResolver
    }
  }
];

@NgModule({
  declarations: [
    SolutionsDetailsComponent,
    SolutionsDetailsAuditHistoryComponent,
    SolutionsDetailsVersionHistoryComponent,
    SolutionsDetailsUsersComponent,
    SolutionsDetailsBillingComponent
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
export class SolutionsDetailsModule {}
