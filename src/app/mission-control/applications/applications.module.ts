import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from './applications.reducer';
import { ApplicationsEffects } from './applications.effects';

import { ApplicationsDeploymentsComponent } from './applications-deployments/applications-deployments.component';
import { ApplicationsGridCardComponent } from './applications-grid/applications-grid-card/applications-grid-card.component';
import { ApplicationsGridComponent } from './applications-grid/applications-grid.component';

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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ApplicationsDeploymentsComponent, ApplicationsGridComponent, ApplicationsGridCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ApplicationsEffects]),
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
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [ApplicationsDeploymentsComponent, ApplicationsGridComponent]
})
export class ApplicationsModule {}
