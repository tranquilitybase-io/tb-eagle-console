import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import reducer, { solutionFeatureKey } from './solutions.reducer';
import { SolutionEffects } from './solutions.effects';

import { BusinessUnitResolver } from '@app/shared/resolvers/business-unit.resolver';
import { ContinuousDeploymentResolver } from '@app/shared/resolvers/continuous-deployment.resolver';
import { ContinuousIntegrationResolver } from '@app/shared/resolvers/continuous-integration.resolver';
import { EnvironmentResolver } from '@app/shared/resolvers/environment.resolver';
import { SolutionsViewResolver } from '@app/shared/resolvers/solutions-view.resolver';
import { SourceControlResolver } from '@app/shared/resolvers/source-control.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./solutions-home/solutions-home.module').then(m => m.SolutionsHomeModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./solutions-create/solutions-create.module').then(m => m.SolutionsCreateModule),
    resolve: {
      businessUnitList: BusinessUnitResolver,
      cdList: ContinuousDeploymentResolver,
      ciList: ContinuousIntegrationResolver,
      environmentList: EnvironmentResolver,
      sourceControlList: SourceControlResolver
    }
  },
  {
    path: 'edit',
    loadChildren: () => import('./solutions-view-edit/solutions-view-edit.module').then(m => m.SolutionsViewEditModule),
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
    loadChildren: () => import('./solutions-view/solutions-view.module').then(m => m.SolutionsViewModule),
    resolve: {
      solution: SolutionsViewResolver
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(solutionFeatureKey, reducer),
    EffectsModule.forFeature([SolutionEffects]),
    RouterModule.forChild(routes)
  ]
})
export class SolutionsModule {}
