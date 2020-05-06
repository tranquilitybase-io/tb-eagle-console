import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingZoneFolderHomeComponent } from './landing-zone-folder-home.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneFolderHomeComponent
  }
];

@NgModule({
  declarations: [LandingZoneFolderHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule, MatIconModule]
})
export class LandingZoneFolderHomeModule {}
