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
import { MatTabsModule } from '@angular/material/tabs';

import { LandingZoneWanHomeDirectComponent } from './landing-zone-wan-home-direct/landing-zone-wan-home-direct.component';
import { LandingZoneWanHomePartnerComponent } from './landing-zone-wan-home-partner/landing-zone-wan-home-partner.component';
import { LandingZoneWanHomeVpnComponent } from './landing-zone-wan-home-vpn/landing-zone-wan-home-vpn.component';
import { LandingZoneWanHomeVpnCardComponent } from './landing-zone-wan-home-vpn/landing-zone-wan-home-vpn-card/landing-zone-wan-home-vpn-card.component';

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
    LandingZoneWanHomeVpnCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ]
})
export class LandingZoneWanHomeModule {}
