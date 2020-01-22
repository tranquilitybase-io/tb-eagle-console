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

const routes: Routes = [
  {
    path: '',
    component: SolutionLandingComponent
  },
  {
    path: 'create',
    component: CreateSolutionComponent
  }
];

@NgModule({
  declarations: [SolutionSelectComponent, SolutionDetailsComponent, CreateSolutionComponent, SolutionLandingComponent],
  providers: [SolutionsService],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(solutionFeatureKey, reducer),
    EffectsModule.forFeature([SolutionEffects]),
    RouterModule.forChild(routes)
  ]
})
export class SolutionsModule {}
