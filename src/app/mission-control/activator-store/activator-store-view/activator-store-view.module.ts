import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ActivatorStoreViewComponent } from './activator-store-view.component';
import { ActivatorByIdResolver } from '@app/shared/resolvers/activator-by-id.resolver';
import { ApplicationsByActivatorIdResolver } from '@app/shared/resolvers/applications-by-activator-id.resolver';
import { DeploymentsComponent } from './deployments/deployments.component';
import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './view.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ViewEffects } from './view.effects';
import { DeploymentsService } from './deployments.service';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';

const routes: Routes = [
  {
    path: '',
    component: ActivatorStoreViewComponent,
    resolve: {
      activator: ActivatorByIdResolver,
      applications: ApplicationsByActivatorIdResolver
    }
  }
];

@NgModule({
  declarations: [ActivatorStoreViewComponent, DeploymentsComponent],
  providers: [DeploymentsService],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ViewEffects]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatChipsModule
  ]
})
export class ActivatorStoreViewModule {}
