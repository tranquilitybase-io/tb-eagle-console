import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LandingZoneWanCreateVpnComponent } from './landing-zone-wan-create-vpn.component';
import { LandingZoneWanCreateVpnGoogleTabComponent } from './landing-zone-wan-create-vpn-google-tab/landing-zone-wan-create-vpn-google-tab.component';
import { LandingZoneWanCreateVpnOnPremiseTabComponent } from './landing-zone-wan-create-vpn-on-premise-tab/landing-zone-wan-create-vpn-on-premise-tab.component';
import { LandingZoneWanCreateVpnReviewTabComponent } from './landing-zone-wan-create-vpn-review-tab/landing-zone-wan-create-vpn-review-tab.component';
import { LandingZoneWanCreateVpnTabComponent } from './landing-zone-wan-create-vpn-tab/landing-zone-wan-create-vpn-tab.component';

import { BgpRoutingModeResolver } from '@app/shared/resolvers/bgp-routing-mode.resolver';
import { SubnetModeResolver } from '@app/shared/resolvers/subnet-mode.resolver';
import { VpnOnPremiseVendorResolver } from '@app/shared/resolvers/vpn-on-premise-vendor.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
const routes: Routes = [
  {
    path: '',
    component: LandingZoneWanCreateVpnComponent,
    resolve: {
      subnetModeList: SubnetModeResolver,
      bgpRoutingModeList: BgpRoutingModeResolver,
      vpnOnPremiseVendorList: VpnOnPremiseVendorResolver
    }
  }
];

@NgModule({
  declarations: [
    LandingZoneWanCreateVpnComponent,
    LandingZoneWanCreateVpnGoogleTabComponent,
    LandingZoneWanCreateVpnOnPremiseTabComponent,
    LandingZoneWanCreateVpnReviewTabComponent,
    LandingZoneWanCreateVpnTabComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule
  ]
})
export class LandingZoneWanCreateVpnModule {}
