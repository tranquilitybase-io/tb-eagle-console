import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { SolutionSelectComponent } from './solution-select/solution-select.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';
import { CreateSolutionComponent } from './create-solution/create-solution.component';
import { SolutionLandingComponent } from './solution-landing/solution-landing.component';
import reducer, { solutionFeatureKey } from './solutions.reducers';
import { SolutionsService } from './solutions.service';
import { EffectsModule } from '@ngrx/effects';
import { SolutionEffects } from './solutions.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { ApplicationsGridComponent } from './view/applications-grid/applications-grid.component';
import { WorkspaceInfoComponent } from './view/workspace-info/workspace-info.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { LayoutModule } from '@angular/cdk/layout';

import { BusinessUnitResolver } from './resolvers/business-unit.resolver';
import { ContinuousDeploymentResolver } from './resolvers/continuous-deployment.resolver';
import { ContinuousIntegrationResolver } from './resolvers/continuous-integration.resolver';
import { EnvironmentResolver } from './resolvers/environment.resolver';
import { SourceControlResolver } from './resolvers/source-control.resolver';
import { ViewResolver } from './resolvers/view.resolver';
import { ApplicationCardComponent } from './view/applications-grid/application-card/application-card.component';
import { AppUnderDeploymentComponent } from './snack-bar/app-under-deployment/app-under-deployment.component';
import { AppIsDeployedComponent } from './snack-bar/app-is-deployed/app-is-deployed.component';

const routes: Routes = [
  {
    path: '',
    component: SolutionLandingComponent
  },
  {
    path: 'create',
    component: CreateSolutionComponent,
    resolve: {
      businessUnitList: BusinessUnitResolver,
      cdList: ContinuousDeploymentResolver,
      ciList: ContinuousIntegrationResolver,
      environmentList: EnvironmentResolver,
      sourceControlList: SourceControlResolver
    }
  },
  {
    path: 'view',
    component: ViewComponent,
    resolve: {
      solution: ViewResolver
    }
  }
];

@NgModule({
  declarations: [
    SolutionSelectComponent,
    SolutionDetailsComponent,
    CreateSolutionComponent,
    SolutionLandingComponent,
    ViewComponent,
    ApplicationsGridComponent,
    WorkspaceInfoComponent,
    ApplicationCardComponent,
    AppUnderDeploymentComponent,
    AppIsDeployedComponent
  ],
  entryComponents: [AppUnderDeploymentComponent, AppIsDeployedComponent],
  providers: [SolutionsService, { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top' } }],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(solutionFeatureKey, reducer),
    EffectsModule.forFeature([SolutionEffects]),
    RouterModule.forChild(routes),
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    LayoutModule
  ]
})
export class SolutionsModule {}
