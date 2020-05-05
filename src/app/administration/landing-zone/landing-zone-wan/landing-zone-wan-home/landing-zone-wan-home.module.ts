import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingZoneWanHomeComponent } from './landing-zone-wan-home.component';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

import { LandingZoneWanHomeDirectComponent } from './landing-zone-wan-home-direct/landing-zone-wan-home-direct.component';
import { LandingZoneWanHomePartnerComponent } from './landing-zone-wan-home-partner/landing-zone-wan-home-partner.component';
import { LandingZoneWanHomeVpnComponent } from './landing-zone-wan-home-vpn/landing-zone-wan-home-vpn.component';
import { LandingZoneWanHomeVpnCardComponent } from './landing-zone-wan-home-vpn/landing-zone-wan-home-vpn-card/landing-zone-wan-home-vpn-card.component';

import reducer, { featureKey } from '../landing-zone-wan.reducers';
import { LandingZoneWanEffects } from '../landing-zone-wan.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ConnectionUnderDeploymentComponent } from './snack-bar/connection-under-deployment/connection-under-deployment.component';
import { ConnectionIsDeployedComponent } from './snack-bar/connection-is-deployed/connection-is-deployed.component';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneWanHomeComponent
  }
];

@NgModule({
  declarations: [
    LandingZoneWanHomeComponent,
    LandingZoneWanHomeDirectComponent,
    LandingZoneWanHomePartnerComponent,
    LandingZoneWanHomeVpnComponent,
    LandingZoneWanHomeVpnCardComponent,
    ConnectionUnderDeploymentComponent,
    ConnectionIsDeployedComponent
  ],
  entryComponents: [ConnectionUnderDeploymentComponent, ConnectionIsDeployedComponent],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top' } }],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([LandingZoneWanEffects]),
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatMenuModule
  ]
})
export class LandingZoneWanHomeModule {}
