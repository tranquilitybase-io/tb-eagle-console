import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './progress/progress.component';
import { SwitchesComponent } from './switches/switches.component';
import { SearchComponent } from './search/search.component';
import { GridViewSwitchComponent } from './grid-view-switch/grid-view-switch.component';
import { BadgesComponent } from './badges/badges.component';

@NgModule({
  declarations: [
    IconComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    SwitchesComponent,
    SearchComponent,
    GridViewSwitchComponent,
    BadgesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    IconComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    RouterModule,
    SwitchesComponent,
    SearchComponent,
    GridViewSwitchComponent,
    BadgesComponent
  ]
})
export class SharedModule { }
