import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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

import { LandingZoneWanEditComponent } from './landing-zone-wan-edit.component';
import { SubnetModeResolver } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/resolvers/subnet-mode.resolver';
import { BgpRoutingModeResolver } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/resolvers/bgp-routing-mode.resolver';
import { VpnOnPremiseVendorResolver } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/resolvers/vpn-on-premise-vendor.resolver';
import { LandingZoneWanFormsVpnTabComponent } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/landing-zone-wan-forms-vpn-tab/landing-zone-wan-forms-vpn-tab.component';
import { LandingZoneWanFormsVpnGoogleTabComponent } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/landing-zone-wan-forms-vpn-google-tab/landing-zone-wan-forms-vpn-google-tab.component';
import { LandingZoneWanFormsVpnOnPremiseTabComponent } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/landing-zone-wan-forms-vpn-on-premise-tab/landing-zone-wan-forms-vpn-on-premise-tab.component';
import { LandingZoneWanFormsVpnReviewTabComponent } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/landing-zone-wan-forms-vpn-review-tab/landing-zone-wan-forms-vpn-review-tab.component';
import { LandingZoneWanFormsVpnComponent } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/landing-zone-wan-forms-vpn.component';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneWanEditComponent,
    resolve: {
      subnetModeList: SubnetModeResolver,
      bgpRoutingModeList: BgpRoutingModeResolver,
      vpnOnPremiseVendorList: VpnOnPremiseVendorResolver
    }
  }
];

@NgModule({
  declarations: [
    LandingZoneWanFormsVpnComponent,
    LandingZoneWanFormsVpnTabComponent,
    LandingZoneWanFormsVpnGoogleTabComponent,
    LandingZoneWanFormsVpnOnPremiseTabComponent,
    LandingZoneWanFormsVpnReviewTabComponent
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
export class LandingZoneWanEditModule {}
