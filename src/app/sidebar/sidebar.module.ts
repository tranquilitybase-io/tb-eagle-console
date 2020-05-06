import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { SidebarComponent } from './sidebar.component';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule {}
