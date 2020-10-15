import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './business-unit.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BusinessUnitEffects } from './business-unit.effects';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./business-unit-home/business-unit-home.module').then(m => m.BusinessUnitHomeModule)
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./business-unit-create/business-unit-create.module').then(m => m.BusinessUnitCreateModule),
    data: {
      breadcrumbsSteps: [
        {
          name: 'Business unit',
          link: '/administration/business-unit'
        },
        {
          name: 'Create new Business Unit'
        }
      ]
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([BusinessUnitEffects])
  ]
})
export class BusinessUnitModule {}