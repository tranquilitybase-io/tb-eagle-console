import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { SidebarComponent } from './sidebar.component';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

const uiModules = [MatSidenavModule, MatIconModule, MatButtonModule];
@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [CommonModule, SharedModule, MatButtonModule, MatIconModule, uiModules,
    MatToolbarModule,
    MatListModule],
  exports: [SidebarComponent, uiModules]
})
export class SidebarModule {}
