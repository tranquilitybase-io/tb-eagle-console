import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IconComponent } from './icon/icon.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './progress/progress.component';
import { SwitchesComponent } from './switches/switches.component';
import { SearchComponent } from './search/search.component';
import { GridViewSwitchComponent } from './grid-view-switch/grid-view-switch.component';
import { BadgesComponent } from './badges/badges.component';
import { SearchPillComponent } from './search-pill/search-pill.component';
import { PillsComponent } from './pills/pills.component';
import { PropertiesComponent } from './properties/properties.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    IconComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    SwitchesComponent,
    SearchComponent,
    GridViewSwitchComponent,
    BadgesComponent,
    SearchPillComponent,
    PillsComponent,
    PropertiesComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    HttpClientModule
  ],
  exports: [
    IconComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    RouterModule,
    SwitchesComponent,
    SearchComponent,
    GridViewSwitchComponent,
    BadgesComponent,
    PillsComponent,
    PropertiesComponent,
    HttpClientModule,
    PaginationComponent
  ]
})
export class SharedModule { }
