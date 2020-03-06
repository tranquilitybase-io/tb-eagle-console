import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingZoneComponent } from './landing-zone.component';
import { SharedModule } from '@app/shared/shared.module';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneComponent
  }
];

@NgModule({
  declarations: [LandingZoneComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), MatButtonToggleModule, MatDividerModule]
})
export class LandingZoneModule {}
