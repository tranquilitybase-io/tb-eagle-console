import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './settings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './settings.effects';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./settings-home/settings-home.module').then(m => m.SettingsHomeModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([SettingsEffects])
  ]
})
export class SettingsModule {}
