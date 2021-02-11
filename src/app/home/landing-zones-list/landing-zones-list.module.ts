import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingZonesListComponent } from './landing-zones-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: LandingZonesListComponent
  }
];

@NgModule({
  declarations: [LandingZonesListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MatTableModule, MatIconModule, MatButtonModule]
})
export class LandingZonesListModule {}
