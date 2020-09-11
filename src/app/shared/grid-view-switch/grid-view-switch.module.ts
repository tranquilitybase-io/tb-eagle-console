import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import reducer, { solutionFeatureKey } from './grid-view-switch.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(solutionFeatureKey, reducer)]
})
export class GridViewSwitchModule {}
