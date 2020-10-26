import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.component.module';
import { GridViewSwitchModule } from './grid-view-switch/grid-view-switch.module';
import { LayoutModule } from './layout/layout.module';
import { NotificationsModule } from './notifications/notifications.module';

import { AlertComponent } from './alert/alert.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridViewSwitchComponent } from './grid-view-switch/grid-view-switch.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { LayoutComponent } from './layout/layout.component';
import { LoaderComponent } from './loader/loader.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PillsComponent } from './pills/pills.component';
import { ProgressComponent } from './progress/progress.component';
import { PropertiesComponent } from './properties/properties.component';
import { SearchComponent } from './search/search.component';
import { SearchPillComponent } from './search-pill/search-pill.component';
import { SwitchesComponent } from './switches/switches.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { YesNoDialogComponent } from './dialogs/yes-no-dialog/yes-no-dialog/yes-no-dialog.component';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatorCreateErrorComponent } from './snack-bar/activator-create-error/activator-create-error.component';
import { ActivatorCreateSuccessComponent } from './snack-bar/activator-create-success/activator-create-success.component';
import { ApiCallStatusComponent } from './snack-bar/api-call-status/api-call-status.component';
import { AppIsDeployedComponent } from './snack-bar/app-is-deployed/app-is-deployed.component';
import { AppUnderDeploymentComponent } from './snack-bar/app-under-deployment/app-under-deployment.component';
import { SolutionCreatedComponent } from './snack-bar/solution-created/solution-created.component';
import { SolutionUnderCreationComponent } from './snack-bar/solution-under-creation/solution-under-creation.component';

import { MatButtonLoadingDirective } from './directives/mat-button-loading.directive';

import { SharedService } from './shared.service';
import { ApplicationsService } from '@app/mission-control/applications/applications.service';
import { ApiCallStatusSnackbarService } from './snack-bar/api-call-status/api-call-status.service';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ActivatorCreateErrorComponent,
    ActivatorCreateSuccessComponent,
    AlertComponent,
    ApiCallStatusComponent,
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
    NotificationsComponent,
    NotificationsComponent,
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
    YesNoDialogComponent,
    MatButtonLoadingDirective
  ],
  entryComponents: [
    ActivatorCreateErrorComponent,
    ActivatorCreateSuccessComponent,
    ApiCallStatusComponent,
    AppIsDeployedComponent,
    AppUnderDeploymentComponent,
    MatProgressSpinner,
    SolutionCreatedComponent,
    SolutionUnderCreationComponent,
    WelcomeComponent,
    YesNoDialogComponent
  ],
  providers: [
    SharedService,
    ApplicationsService,
    ApiCallStatusSnackbarService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top' } }
  ],
  bootstrap: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    BreadcrumbsModule,
    HttpClientModule,
    FormsModule,
    GridViewSwitchModule,
    LayoutModule,
    NotificationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    ActivatorCreateErrorComponent,
    ActivatorCreateSuccessComponent,
    AlertComponent,
    ApiCallStatusComponent,
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
    MatBadgeModule,
    MatBadgeModule,
    MatButtonLoadingDirective,
    MatDialogModule,
    MatDialogModule,
    MatDialogModule,
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
