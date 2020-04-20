import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from './alert/alert.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridViewSwitchComponent } from './grid-view-switch/grid-view-switch.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { LoaderComponent } from './loader/loader.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PillsComponent } from './pills/pills.component';
import { ProgressComponent } from './progress/progress.component';
import { PropertiesComponent } from './properties/properties.component';
import { SearchComponent } from './search/search.component';
import { SearchPillComponent } from './search-pill/search-pill.component';
import { SwitchesComponent } from './switches/switches.component';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { AppIsDeployedComponent } from './snack-bar/app-is-deployed/app-is-deployed.component';
import { AppUnderDeploymentComponent } from './snack-bar/app-under-deployment/app-under-deployment.component';
import { SolutionCreatedComponent } from './snack-bar/solution-created/solution-created.component';
import { SolutionUnderCreationComponent } from './snack-bar/solution-under-creation/solution-under-creation.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SharedService } from './shared.service';
import { DeploymentsService } from '@app/mission-control/activator-store/activator-store-view/deployments.service';

@NgModule({
  declarations: [
    AlertComponent,
    AppIsDeployedComponent,
    AppUnderDeploymentComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    DropdownComponent,
    GridViewSwitchComponent,
    IconComponent,
    InputComponent,
    LoaderComponent,
    PaginationComponent,
    PillsComponent,
    ProgressComponent,
    PropertiesComponent,
    SearchComponent,
    SearchPillComponent,
    SolutionCreatedComponent,
    SolutionUnderCreationComponent,
    SwitchesComponent
  ],
  entryComponents: [
    AppIsDeployedComponent,
    AppUnderDeploymentComponent,
    SolutionCreatedComponent,
    SolutionUnderCreationComponent
  ],
  providers: [
    SharedService,
    DeploymentsService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top' } }
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    AlertComponent,
    AppIsDeployedComponent,
    AppUnderDeploymentComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    DropdownComponent,
    FormsModule,
    GridViewSwitchComponent,
    HttpClientModule,
    IconComponent,
    InputComponent,
    LoaderComponent,
    PaginationComponent,
    PillsComponent,
    ProgressComponent,
    PropertiesComponent,
    RouterModule,
    SearchComponent,
    SolutionCreatedComponent,
    SolutionUnderCreationComponent,
    SwitchesComponent
  ]
})
export class SharedModule {}
