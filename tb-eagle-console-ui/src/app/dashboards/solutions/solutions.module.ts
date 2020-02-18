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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

const routes: Routes = [
  {
    path: '',
    component: SolutionLandingComponent
  },
  {
    path: 'create',
    component: CreateSolutionComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  declarations: [
    SolutionSelectComponent,
    SolutionDetailsComponent,
    CreateSolutionComponent,
    SolutionLandingComponent,
    ViewComponent,
    ApplicationsGridComponent
  ],
  providers: [SolutionsService],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(solutionFeatureKey, reducer),
    EffectsModule.forFeature([SolutionEffects]),
    RouterModule.forChild(routes),
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ]
})
export class SolutionsModule {}
