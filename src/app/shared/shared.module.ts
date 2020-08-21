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
import { LayoutComponent } from './layout/layout.component';
import { LoaderComponent } from './loader/loader.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PillsComponent } from './pills/pills.component';
import { ProgressComponent } from './progress/progress.component';
import { PropertiesComponent } from './properties/properties.component';
import { SearchComponent } from './search/search.component';
import { SearchPillComponent } from './search-pill/search-pill.component';
import { SwitchesComponent } from './switches/switches.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { AppIsDeployedComponent } from './snack-bar/app-is-deployed/app-is-deployed.component';
import { AppUnderDeploymentComponent } from './snack-bar/app-under-deployment/app-under-deployment.component';
import { SolutionCreatedComponent } from './snack-bar/solution-created/solution-created.component';
import { SolutionUnderCreationComponent } from './snack-bar/solution-under-creation/solution-under-creation.component';

import { SharedService } from './shared.service';
import { ApplicationsService } from '@app/mission-control/applications/applications.service';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule, MatBadgeModule } from '@angular/material';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsModule } from './notifications/notifications.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.component.module';

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
    LayoutComponent,
    LoaderComponent,
    PaginationComponent,
    PillsComponent,
    ProgressComponent,
    PropertiesComponent,
    SearchComponent,
    SearchPillComponent,
    SolutionCreatedComponent,
    SolutionUnderCreationComponent,
    SwitchesComponent,
    WelcomeComponent,
    NotificationsComponent
  ],
  entryComponents: [
    AppIsDeployedComponent,
    AppUnderDeploymentComponent,
    SolutionCreatedComponent,
    SolutionUnderCreationComponent,
    WelcomeComponent
  ],
  providers: [
    SharedService,
    ApplicationsService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top' } }
  ],
  bootstrap: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    BreadcrumbsModule,
    HttpClientModule,
    FormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    NotificationsModule
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
    LayoutComponent,
    LoaderComponent,
    MatDialogModule,
    PaginationComponent,
    PillsComponent,
    ProgressComponent,
    PropertiesComponent,
    RouterModule,
    SearchComponent,
    SolutionCreatedComponent,
    SolutionUnderCreationComponent,
    SwitchesComponent,
    MatDialogModule,
    MatBadgeModule
  ]
})
export class SharedModule {}
