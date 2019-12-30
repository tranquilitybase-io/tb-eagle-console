import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { IconsBarComponent } from './icons-bar/icons-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserComponent } from './user/user.component';
import { OrganizationComponent } from './organization/organization.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    IconsBarComponent,
    NavigationBarComponent,
    UserComponent,
    OrganizationComponent,
    SectionHeaderComponent,
    NavItemComponent
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
