import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoaderComponent } from './loader/loader.component';

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
    PaginationComponent,
    AlertComponent,
    InputComponent,
    DropdownComponent,
    LoaderComponent
  ],
  imports: [CommonModule, RouterModule.forChild([]), HttpClientModule, FormsModule],
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
    PaginationComponent,
    AlertComponent,
    FormsModule,
    InputComponent,
    DropdownComponent,
    LoaderComponent
  ]
})
export class SharedModule {}
