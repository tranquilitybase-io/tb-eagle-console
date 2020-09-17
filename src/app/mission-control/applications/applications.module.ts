import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import reducer, { featureKey } from './applications.reducer';
import { ApplicationsEffects } from './applications.effects';

import { ApplicationsDialogModule } from './applications-dialog/applications-dialog.module';

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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { ApplicationsDeploymentsContainerComponent } from './applications-deployments-container/applications-deployments-container.component';
import { ApplicationsDeploymentsGridComponent } from './applications-deployments-grid/applications-deployments-grid.component';

@NgModule({
  declarations: [
    ApplicationsDeploymentsComponent,
    ApplicationsGridComponent,
    ApplicationsGridCardComponent,
    ApplicationsDeploymentsContainerComponent,
    ApplicationsDeploymentsGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ApplicationsEffects]),
    ApplicationsDialogModule,
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
    MatStepperModule,
    MatTableModule,
    MatTooltipModule
  ],
  exports: [
    ApplicationsDeploymentsComponent,
    ApplicationsGridComponent,
    ApplicationsDeploymentsContainerComponent,
    ApplicationsDeploymentsGridComponent
  ]
})
export class ApplicationsModule {}
