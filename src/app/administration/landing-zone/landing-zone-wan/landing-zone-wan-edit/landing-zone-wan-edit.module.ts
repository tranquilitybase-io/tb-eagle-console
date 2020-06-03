import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'vpn',
    loadChildren: () =>
      import('./landing-zone-wan-edit-vpn/landing-zone-wan-edit-vpn.module').then(m => m.LandingZoneWanEditVpnModule)
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LandingZoneWanEditModule {}
