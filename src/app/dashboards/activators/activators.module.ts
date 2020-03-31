import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatorsComponent } from './activators.component';
import { ControlsComponent } from './controls/controls.component';
import { CategorySwitchComponent } from './category-switch/category-switch.component';
import { CategoriesModule } from './categories/categories.module';
import { ActivatorsService } from './activators.service';
import { DeploymentsService } from './deployments.service';
import reducer, { featureKey } from './activators.reducer';
import { MissingAvailableSolutionsDialogComponent } from './dialogs/missing-available-solutions-dialog/missing-available-solutions-dialog.component';
import { ActivatorGrantAccessDialogComponent } from './dialogs/activator-grant-access-dialog/activator-grant-access-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { ActivatorCardComponent } from './activators-grid/activator-card/activator-card.component';
import { ActivatorsGridComponent } from './activators-grid/activators-grid.component';
import { EffectsModule } from '@ngrx/effects';
import { ActivatorsEffects } from './activators.effects';
import { TeamResolver } from './resolvers/team.resolver';

const routes: Routes = [
  {
    path: '',
    component: ActivatorsComponent,
    children: [
      {
        path: '',
        component: ActivatorsGridComponent,
        resolve: {
          teamList: TeamResolver
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
    ActivatorGrantAccessDialogComponent,
    ActivatorCardComponent,
    ActivatorsGridComponent
  ],
  entryComponents: [MissingAvailableSolutionsDialogComponent, ActivatorGrantAccessDialogComponent],
  providers: [ActivatorsService, DeploymentsService],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CategoriesModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ActivatorsEffects]),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule
  ]
})
export class ActivatorsModule {}
