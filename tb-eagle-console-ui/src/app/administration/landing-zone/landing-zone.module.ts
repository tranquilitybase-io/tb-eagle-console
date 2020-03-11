import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingZoneComponent } from './landing-zone.component';
import { SharedModule } from '@app/shared/shared.module';

import { LandingZoneGridComponent } from './landing-zone-grid/landing-zone-grid.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneComponent
  }
];

@NgModule({
  declarations: [LandingZoneComponent, LandingZoneGridComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    LayoutModule
  ]
})
export class LandingZoneModule {}
