import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingZoneWanFormsVpnComponent } from './landing-zone-wan-forms-vpn.component';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneWanFormsVpnComponent
  }
];

@NgModule({
  declarations: [LandingZoneWanFormsVpnComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule
  ]
})
export class LandingZoneWanFormsVpnModule {}
