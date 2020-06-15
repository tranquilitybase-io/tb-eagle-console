import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./teams-home/teams-home.module').then(m => m.TeamsHomeModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./teams-create/teams-create.module').then(m => m.TeamsCreateModule)
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TeamsModule {}
