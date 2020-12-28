import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './shared-service-home.reducer';
import { EffectsModule } from '@ngrx/effects';

import { SharedServiceHomeComponent } from './shared-service-home.component';
import { LandingZoneHomeEffects } from './shared-service-home.effects';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

const routes: Routes = [
  {
    path: '',
    component: SharedServiceHomeComponent
  }
];

@NgModule({
  declarations: [SharedServiceHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    EffectsModule.forFeature([LandingZoneHomeEffects]),
    StoreModule.forFeature(featureKey, reducer),
    LayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatStepperModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class SharedServiceHomeModule {}
