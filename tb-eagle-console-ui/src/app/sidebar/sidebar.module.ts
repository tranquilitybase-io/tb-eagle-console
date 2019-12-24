import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconsBarComponent } from './icons-bar/icons-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    SidebarComponent,
    IconsBarComponent,
    NavigationBarComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
