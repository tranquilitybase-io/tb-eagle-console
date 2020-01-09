import { CreateSolutionComponent } from './solutions/create-solution/create-solution.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@app/sidebar/sidebar.module';
import { RouterModule, Routes } from '@angular/router';

import { DashboardsComponent } from './dashboards/dashboards.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    children: [
      {
        path: 'solutions',
        loadChildren: () => import('./solutions/solutions.module').then(m => m.SolutionsModule)
      },
      {
        path: 'activators',
        loadChildren: () => import('./activators/activators.module').then(m => m.ActivatorsModule)
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardsComponent],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardsModule { }
