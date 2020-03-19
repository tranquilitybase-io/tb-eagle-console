import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingZoneWanHomeComponent } from './landing-zone-wan-home.component';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { LandingZoneWanDirectComponent } from './landing-zone-wan-direct/landing-zone-wan-direct.component';
import { LandingZoneWanPartnerComponent } from './landing-zone-wan-partner/landing-zone-wan-partner.component';
import { LandingZoneWanVPNComponent } from './landing-zone-wan-vpn/landing-zone-wan-vpn.component';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneWanHomeComponent
  }
];

@NgModule({
  declarations: [
    LandingZoneWanHomeComponent,
    LandingZoneWanDirectComponent,
    LandingZoneWanPartnerComponent,
    LandingZoneWanVPNComponent
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
