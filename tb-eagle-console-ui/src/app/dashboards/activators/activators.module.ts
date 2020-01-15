import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { ActivatorsComponent } from './activators/activators.component';
import { ControlsComponent } from './controls/controls.component';
import { CategorySwitchComponent } from './category-switch/category-switch.component';
import { AllModule } from './all/all.module';
import { CategoriesModule } from './categories/categories.module';
import { ActivatorsService } from './activators.service';
import { GridsComponent } from './grids/grids.component';
import { DeploymentsService } from './deployments.service';

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
      }
    ]
  }
];

@NgModule({
  declarations: [
    ActivatorsComponent,
    ControlsComponent,
    CategorySwitchComponent,
    GridsComponent
  ],
  providers: [
    ActivatorsService,
    DeploymentsService
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AllModule,
    CategoriesModule
  ]
})
export class ActivatorsModule {}
