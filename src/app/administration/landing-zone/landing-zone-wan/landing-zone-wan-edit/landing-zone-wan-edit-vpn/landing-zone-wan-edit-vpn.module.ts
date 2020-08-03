import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SubnetModeResolver } from '@app/shared/resolvers/subnet-mode.resolver';
import { BgpRoutingModeResolver } from '@app/shared/resolvers/bgp-routing-mode.resolver';
import { VpnOnPremiseVendorResolver } from '@app/shared/resolvers/vpn-on-premise-vendor.resolver';
import { LandingZoneWanVpnByIdResolver } from '@app/shared/resolvers/landing-zone-wan-vpn-by-id.resolver';

import { LandingZoneWanEditVpnComponent } from './landing-zone-wan-edit-vpn.component';

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

import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneWanEditVpnComponent,
    resolve: {
      subnetModeList: SubnetModeResolver,
      bgpRoutingModeList: BgpRoutingModeResolver,
      vpnOnPremiseVendorList: VpnOnPremiseVendorResolver,
      wanConfiguration: LandingZoneWanVpnByIdResolver
    }
  }
];

@NgModule({
  declarations: [LandingZoneWanEditVpnComponent],
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
    MatTooltipModule,
    SharedModule
  ]
})
export class LandingZoneWanEditVpnModule {}
