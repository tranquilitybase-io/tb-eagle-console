import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingZonesListComponent } from './landing-zones-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: LandingZonesListComponent,
    data: {
      breadcrumbsSteps: [
        {
          name: 'Home'
        }
      ]
    }
  }
];

@NgModule({
  declarations: [LandingZonesListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MatTableModule, MatIconModule]
})
export class LandingZonesListModule {}
