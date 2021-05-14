import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.component.module';
import { FilterBarModule } from './filter-bar/filter-bar.module';
import { GridViewSwitchModule } from './grid-view-switch/grid-view-switch.module';
import { NotificationsModule } from './notifications/notifications.module';

import { AlertComponent } from './alert/alert.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { GridViewSwitchComponent } from './grid-view-switch/grid-view-switch.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
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
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AlertComponent,
    ApiCallStatusComponent,
    AppIsDeployedComponent,
    AppUnderDeploymentComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    DropdownComponent,
    FavoriteButtonComponent,
    FilterBarComponent,
    FilterSelectComponent,
    GridViewSwitchComponent,
    IconComponent,
    InputComponent,
    LoaderComponent,
    MatButtonLoadingDirective,
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
  ],
  entryComponents: [
    ApiCallStatusComponent,
    AppIsDeployedComponent,
    AppUnderDeploymentComponent,
    FilterBarComponent,
    FilterSelectComponent,
    MatProgressSpinner,
    SolutionCreatedComponent,
    SolutionUnderCreationComponent,
    WelcomeComponent,
    YesNoDialogComponent,
  ],
  providers: [
    SharedService,
    ApplicationsService,
    ApiCallStatusSnackbarService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top' } },
  ],
  bootstrap: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    BreadcrumbsModule,
    HttpClientModule,
    FormsModule,
    FilterBarModule,
    ReactiveFormsModule,
    GridViewSwitchModule,
    NotificationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [
    AlertComponent,
    ApiCallStatusComponent,
    AppIsDeployedComponent,
    AppUnderDeploymentComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    DropdownComponent,
    FavoriteButtonComponent,
    FilterBarComponent,
    FilterBarComponent,
    FilterBarModule,
    FilterSelectComponent,
    FilterSelectComponent,
    FormsModule,
    GridViewSwitchComponent,
    HttpClientModule,
    IconComponent,
    InputComponent,
    LoaderComponent,
    MatBadgeModule,
    MatBadgeModule,
    MatButtonLoadingDirective,
    MatDialogModule,
    MatDialogModule,
    MatDialogModule,
    NotificationsComponent,
    NotificationsModule,
    PaginationComponent,
    PillsComponent,
    ProgressComponent,
    PropertiesComponent,
    RouterModule,
    SearchComponent,
    SolutionCreatedComponent,
    SolutionUnderCreationComponent,
    SwitchesComponent,
  ],
})
export class SharedModule {}
