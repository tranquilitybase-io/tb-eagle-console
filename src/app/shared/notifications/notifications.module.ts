import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './notifications.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(featureKey, reducer)]
})
export class NotificationsModule {}
