import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SitesHomeComponent } from './sites-home.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: SitesHomeComponent,
  },
];

@NgModule({
  declarations: [SitesHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, MatTableModule, MatIconModule, MatButtonModule],
})
export class SitesHomeModule {}
