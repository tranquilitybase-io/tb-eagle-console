import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { IconsBarComponent } from './icons-bar/icons-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    IconsBarComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
