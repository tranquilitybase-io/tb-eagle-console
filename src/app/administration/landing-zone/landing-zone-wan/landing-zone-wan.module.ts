import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LandingZoneWanEffects } from './landing-zone-wan.effects';
import reducer, { featureKey } from './landing-zone-wan.reducers';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-zone-wan-home/landing-zone-wan-home.module').then(m => m.LandingZoneWanHomeModule)
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./landing-zone-wan-forms/landing-zone-wan-forms.module').then(m => m.LandingZoneWanFormsModule)
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./landing-zone-wan-view/landing-zone-wan-view.module').then(m => m.LandingZoneWanViewModule)
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
