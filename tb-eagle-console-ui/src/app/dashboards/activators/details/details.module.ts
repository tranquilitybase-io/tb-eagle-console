import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { DetailsContainerComponent } from './details-container/details-container.component';
import { SharedModule as ActivatorsSharedModule } from '../shared/shared.module';
import { MaterialModule } from '@app/material/material.module';
import { OverviewComponent } from './details-container/overview/overview.component';
import { AuditHistoryComponent } from './details-container/audit-history/audit-history.component';
import { VersionHistoryComponent } from './details-container/version-history/version-history.component';
import { UsersComponent } from './details-container/users/users.component';
import { BillingComponent } from './details-container/billing/billing.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsContainerComponent
  }
];

@NgModule({
  declarations: [
    DetailsContainerComponent,
    OverviewComponent,
    AuditHistoryComponent,
    VersionHistoryComponent,
    UsersComponent,
    BillingComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), ActivatorsSharedModule, MaterialModule]
})
export class DetailsModule {}
