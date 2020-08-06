import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import reducer, { breadcrumbsFeatureKey } from './breadcrumbs.component.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(breadcrumbsFeatureKey, reducer)]
})
export class BreadcrumbsModule {}
