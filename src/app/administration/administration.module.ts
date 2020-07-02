import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardService } from '@app/guards/admin-guard.service';

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
        loadChildren: () => import('./landing-zone/landing-zone.module').then(m => m.LandingZoneModule),
        canActivate: [AdminGuardService]
        // },
        // {
        //   path: 'shared-services',
        //   loadChildren: () => import('./shared-services/shared-services.module').then(m => m.SharedServicesModule)
        // },
        // {
        //   path: 'users',
        //   loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'teams',
        loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)
        // },
        // {
        //   path: 'settings',
        //   loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  }
];

@NgModule({
  declarations: [AdministrationComponent],
  providers: [AdminGuardService],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AdministrationModule {}
