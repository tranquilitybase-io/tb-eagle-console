import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LandingZoneWanEffects } from './landing-zone-wan.effects';
import reducer, { featureKey } from './landing-zone-wan.reducer';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { BreadcrumbsURLs } from '@app/shared/breadcrumbs/breadcrumbs.component.model';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-zone-wan-home/landing-zone-wan-home.module').then(m => m.LandingZoneWanHomeModule)
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./landing-zone-wan-create/landing-zone-wan-create.module').then(m => m.LandingZoneWanCreateModule),
    data: {
      breadcrumbURL: BreadcrumbsURLs.LANDING_ZONE_WAN_CREATE
    }
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./landing-zone-wan-edit/landing-zone-wan-edit.module').then(m => m.LandingZoneWanEditModule),
    data: {
      breadcrumbURL: BreadcrumbsURLs.LANDING_ZONE_WAN_EDIT
    }
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./landing-zone-wan-view/landing-zone-wan-view.module').then(m => m.LandingZoneWanViewModule),
    data: {
      breadcrumbURL: BreadcrumbsURLs.LANDING_ZONE_WAN_VIEW
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([LandingZoneWanEffects]),
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class LandingZoneWanModule {}
