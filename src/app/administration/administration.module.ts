import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { Routes, RouterModule } from '@angular/router';
import { SidebarModule } from '@app/sidebar/sidebar.module';
import { welcomeComponent } from '@app/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'landing-zone',
        pathMatch: 'full'
      },
      {
        path: 'landing-zone',
        loadChildren: () => import('./landing-zone/landing-zone.module').then(m => m.LandingZoneModule)
        // },
        // {
        //   path: 'shared-services',
        //   loadChildren: () => import('./shared-services/shared-services.module').then(m => m.SharedServicesModule)
        // },
        // {
        //   path: 'users',
        //   loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
        // },
        // {
        //   path: 'teams',
        //   loadChildren: () => import('./teams/teams.module').then(m => m.LandingZoneModule)
        // },
        // {
        //   path: 'settings',
        //   loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  }
];

@NgModule({
  declarations: [AdministrationComponent, welcomeComponent],
  imports: [CommonModule, SidebarModule, RouterModule.forChild(routes)]
})
export class AdministrationModule {}
