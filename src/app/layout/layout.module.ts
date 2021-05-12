import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActivatorStoreDialogModule } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog.module';
import { LayoutComponent } from './layout.component';
import { NotificationsModule } from '../shared/notifications/notifications.module';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule.forChild([]),
    ActivatorStoreDialogModule,
    CommonModule,
    NotificationsModule,
    SharedModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class LayoutModule {}
