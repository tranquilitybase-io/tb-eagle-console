import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vpn',
    pathMatch: 'full'
  },
  {
    path: 'vpn',
    loadChildren: () =>
      import('./landing-zone-wan-create-vpn/landing-zone-wan-create-vpn.module').then(
        m => m.LandingZoneWanCreateVpnModule
      )
    // },
    // {
    //   path: 'direct',
    //   loadChildren: () =>
    //     import('./landing-zone-wan-create-direct/landing-zone-wan-create-direct.module').then(m => m.LandingZoneWanCreateDirectModule)
    // },
    // {
    //   path: 'partner',
    //   loadChildren: () =>
    //     import('./landing-zone-wan-create-partner/landing-zone-wan-create-partner.module').then(m => m.LandingZoneWanCreatePartnerModule)
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LandingZoneWanCreateModule {}
