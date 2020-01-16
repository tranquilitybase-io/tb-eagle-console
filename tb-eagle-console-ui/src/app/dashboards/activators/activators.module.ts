import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@app/shared/shared.module';

import { ActivatorsComponent } from './activators/activators.component';
import { ControlsComponent } from './controls/controls.component';
import { CategorySwitchComponent } from './category-switch/category-switch.component';
import { AllModule } from './all/all.module';
import { CategoriesModule } from './categories/categories.module';
import { ActivatorsService } from './activators.service';
import { GridsComponent } from './grids/grids.component';
import { DeploymentsService } from './deployments.service';
import reducer, { featureKey } from './activators.reducer';
import { SharedModule as ActivatorsSharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ActivatorsComponent,
    children: [
      {
        path: '',
        component: GridsComponent
      },
      {
        path: 'view',
        loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
      }
    ]
  }
];

@NgModule({
  declarations: [ActivatorsComponent, ControlsComponent, CategorySwitchComponent, GridsComponent],
  providers: [ActivatorsService, DeploymentsService],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AllModule,
    CategoriesModule,
    StoreModule.forFeature(featureKey, reducer),
    ActivatorsSharedModule
  ]
})
export class ActivatorsModule {}
