import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { BusinessUnitHomeGridCardComponent } from './business-unit-home-grid/business-unit-home-grid-card/business-unit-home-grid-card.component';
import { BusinessUnitHomeGridComponent } from './business-unit-home-grid/business-unit-home-grid.component';
import { BusinessUnitHomeListComponent } from './business-unit-home-list/business-unit-home-list.component';
import { BusinessUnitHomeSelectComponent } from './business-unit-home-select/business-unit-home-select.component';
import { BusinessUnitsHomeComponent } from './business-unit-home.component';

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
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    component: BusinessUnitsHomeComponent
  }
];

@NgModule({
  declarations: [
    BusinessUnitHomeGridCardComponent,
    BusinessUnitHomeGridComponent,
    BusinessUnitHomeListComponent,
    BusinessUnitHomeSelectComponent,
    BusinessUnitsHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ]
})
export class BusinessUnitHomeModule {}
