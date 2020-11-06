import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActivatorStoreDialogModule } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog.module';
import { LayoutComponent } from './layout.component';
import { NotificationsModule } from '../shared/notifications/notifications.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule.forChild([]),
    CommonModule,
    ActivatorStoreDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    NotificationsModule,
    SharedModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class LayoutModule {}
