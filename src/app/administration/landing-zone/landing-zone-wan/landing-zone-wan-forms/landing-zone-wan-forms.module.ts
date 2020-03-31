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
      import('./landing-zone-wan-forms-vpn/landing-zone-wan-forms-vpn.module').then(m => m.LandingZoneWanFormsVpnModule)
    // },
    // {
    //   path: 'direct',
    //   loadChildren: () =>
    //     import('./landing-zone-wan-forms-direct/landing-zone-wan-forms-direct.module').then(m => m.LandingZoneWanFormsDirectModule)
    // },
    // {
    //   path: 'partner',
    //   loadChildren: () =>
    //     import('./landing-zone-wan-forms-partner/landing-zone-wan-forms-partner.module').then(m => m.LandingZoneWanFormsPartnerModule)
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LandingZoneWanFormsModule {}
