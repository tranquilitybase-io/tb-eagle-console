import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingZoneWanComponent } from './landing-zone-wan.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { LandingZoneWanDirectComponent } from './landing-zone-wan-direct/landing-zone-wan-direct.component';
import { LandingZoneWanGridComponent } from './landing-zone-wan-grid/landing-zone-wan-grid.component';
import { LandingZoneWanPartnerComponent } from './landing-zone-wan-partner/landing-zone-wan-partner.component';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneWanComponent
  }
];

@NgModule({
  declarations: [
    LandingZoneWanComponent,
    LandingZoneWanGridComponent,
    LandingZoneWanPartnerComponent,
    LandingZoneWanDirectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
