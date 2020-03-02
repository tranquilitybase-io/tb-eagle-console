import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@app/shared/shared.module';

import { ActivatorsComponent } from './activators.component';
import { ControlsComponent } from './controls/controls.component';
import { CategorySwitchComponent } from './category-switch/category-switch.component';
import { CategoriesModule } from './categories/categories.module';
import { ActivatorsService } from './activators.service';
import { DeploymentsService } from './deployments.service';
import reducer, { featureKey } from './activators.reducer';
import { MissingAvailableSolutionsDialogComponent } from './dialogs/missing-available-solutions-dialog/missing-available-solutions-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { ActivatorsResolver } from './resolvers/activators.resolver';
import { ActivatorCardComponent } from './activators-grid/activator-card/activator-card.component';
import { ActivatorsGridComponent } from './activators-grid/activators-grid.component';

const routes: Routes = [
  {
    path: '',
    component: ActivatorsComponent,
    children: [
      {
        path: '',
        component: ActivatorsGridComponent,
        resolve: {
          activators: ActivatorsResolver
        }
      },
      {
        path: 'view',
        loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    ActivatorsComponent,
    ControlsComponent,
    CategorySwitchComponent,
    MissingAvailableSolutionsDialogComponent,
    ActivatorCardComponent,
    ActivatorsGridComponent
  ],
  entryComponents: [MissingAvailableSolutionsDialogComponent],
  providers: [ActivatorsService, DeploymentsService],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CategoriesModule,
    StoreModule.forFeature(featureKey, reducer),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ]
})
export class ActivatorsModule {}
