import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingZoneWanHomeComponent } from './landing-zone-wan-home.component';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { LandingZoneWanHomeDirectComponent } from './landing-zone-wan-home-direct/landing-zone-wan-home-direct.component';
import { LandingZoneWanHomePartnerComponent } from './landing-zone-wan-home-partner/landing-zone-wan-home-partner.component';
import { LandingZoneWanHomeVpnComponent } from './landing-zone-wan-home-vpn/landing-zone-wan-home-vpn.component';

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
    LandingZoneWanHomeVpnComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class LandingZoneWanHomeModule {}
