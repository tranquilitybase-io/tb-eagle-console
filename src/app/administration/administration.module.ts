import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { Routes, RouterModule } from '@angular/router';
import { LZAdminGuardService } from '@app/guards/lz-admin-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'landing-zone',
        pathMatch: 'full',
      },
      {
        path: 'landing-zone',
        loadChildren: () => import('./landing-zone/landing-zone.module').then((m) => m.LandingZoneModule),
        canActivate: [LZAdminGuardService],
        data: {
          breadcrumbsSteps: [
            {
              name: 'Landing Zone',
            },
          ],
        },
      },
      {
        path: 'shared-services',
        loadChildren: () => import('./shared-services/shared-services.module').then((m) => m.SharedServicesModule),
        canActivate: [LZAdminGuardService],
        data: {
          breadcrumbsSteps: [
            {
              name: 'Shared Services',
            },
          ],
        },
      },
      {
        path: 'teams',
        loadChildren: () => import('./teams/teams.module').then((m) => m.TeamsModule),
        data: {
          breadcrumbsSteps: [
            {
              name: 'Teams',
            },
          ],
        },
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
        data: {
          breadcrumbsSteps: [
            {
              name: 'Users',
            },
          ],
        },
      },
      {
        path: 'business-unit',
        loadChildren: () => import('./busines-unit/business-unit.module').then((m) => m.BusinessUnitModule),
        canActivate: [LZAdminGuardService],
        data: {
          breadcrumbsSteps: [
            {
              name: 'Business unit',
            },
          ],
        },
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule),
        canActivate: [LZAdminGuardService],
        data: {
          breadcrumbsSteps: [
            {
              name: 'Settings',
            },
          ],
        },
      },
    ],
  },
];

@NgModule({
  declarations: [AdministrationComponent],
  providers: [LZAdminGuardService],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdministrationModule {}
