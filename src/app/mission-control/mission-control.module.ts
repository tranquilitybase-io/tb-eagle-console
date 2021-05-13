import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionControlComponent } from './mission-control.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MissionControlComponent,
    children: [
      {
        path: '',
        redirectTo: 'activator-store',
        pathMatch: 'full',
      },
      {
        path: 'activator-store',
        loadChildren: () => import('./activator-store/activator-store.module').then((m) => m.ActivatorStoreModule),
      },
      {
        path: 'solutions',
        loadChildren: () => import('./solutions/solutions.module').then((m) => m.SolutionsModule),
      },
    ],
  },
];

@NgModule({
  declarations: [MissionControlComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MissionControlModule {}
