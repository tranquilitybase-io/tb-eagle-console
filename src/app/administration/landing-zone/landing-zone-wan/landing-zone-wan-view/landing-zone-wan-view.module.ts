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
import { LandingZoneWanViewComponent } from './landing-zone-wan-view.component';
import { SubnetModeResolver } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/resolvers/subnet-mode.resolver';
import { BgpRoutingModeResolver } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/resolvers/bgp-routing-mode.resolver';
import { VpnOnPremiseVendorResolver } from '../landing-zone-wan-forms/landing-zone-wan-forms-vpn/resolvers/vpn-on-premise-vendor.resolver';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneWanViewComponent
  }
];

@NgModule({
  declarations: [LandingZoneWanViewComponent],
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
export class LandingZoneWanViewModule {}