import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { DetailsComponent } from './details.component';
import { SharedModule as ActivatorsSharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { AuditHistoryComponent } from './audit-history/audit-history.component';
import { VersionHistoryComponent } from './version-history/version-history.component';
import { UsersComponent } from './users/users.component';
import { BillingComponent } from './billing/billing.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [
    DetailsComponent,
    OverviewComponent,
    AuditHistoryComponent,
    VersionHistoryComponent,
    UsersComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ActivatorsSharedModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule
  ]
})
export class DetailsModule {}
