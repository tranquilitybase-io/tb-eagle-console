import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import reducer, { featureKey } from '../sites.reducer';
import { StoreModule } from '@ngrx/store';

import { SitesHomeComponent } from './sites-home.component';
import { SitesHomeFilterComponent } from './sites-home-filter/sites-home-filter.component';
import { SitesHomeGridCardComponent } from './sites-home-grid/sites-home-grid-card/sites-home-grid-card.component';
import { SitesHomeGridComponent } from './sites-home-grid/sites-home-grid.component';
import { SitesHomeListComponent } from './sites-home-list/sites-home-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
  {
    path: '',
    component: SitesHomeComponent,
  },
];

@NgModule({
  declarations: [
    SitesHomeComponent,
    SitesHomeFilterComponent,
    SitesHomeGridCardComponent,
    SitesHomeGridComponent,
    SitesHomeListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature(featureKey, reducer),
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
  ],
})
export class SitesHomeModule {}
