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
import { LandingZoneWanEditComponent } from './landing-zone-wan-edit/landing-zone-wan-edit.component';
import { LandingZoneWanEditModule } from './landing-zone-wan-edit/landing-zone-wan-edit.module';

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
    path: 'edit',
    loadChildren: () =>
      import('./landing-zone-wan-edit/landing-zone-wan-edit.module').then(m => m.LandingZoneWanEditModule)
  }
];

@NgModule({
  declarations: [LandingZoneWanEditComponent],
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
    MatTabsModule,
    LandingZoneWanEditModule
  ]
})
export class LandingZoneWanModule {}
