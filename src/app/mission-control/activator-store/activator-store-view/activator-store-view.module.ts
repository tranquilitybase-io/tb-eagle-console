import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsModule } from '@app/mission-control/applications/applications.module';

import { ActivatorStoreViewComponent } from './activator-store-view.component';

import { ActivatorByIdResolver } from '@app/shared/resolvers/activator-by-id.resolver';
import { ApplicationsByActivatorIdResolver } from '@app/shared/resolvers/applications-by-activator-id.resolver';
import { ApplicationsService } from '@app/mission-control/applications/applications.service';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

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
  declarations: [ActivatorStoreViewComponent],
  providers: [ApplicationsService],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationsModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule
  ]
})
export class ActivatorStoreViewModule {}
