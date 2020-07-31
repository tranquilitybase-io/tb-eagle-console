import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingZoneDialogModule } from '../landing-zone-dialog/landing-zone-dialog.module';
import { LandingZoneEnvironmentComponent } from './landing-zone-environment.component';

import { StoreModule } from '@ngrx/store';
import reducer, { featureKey } from './landing-zone-environment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LandingZoneEnvironmentEffects } from './landing-zone-environment.effects';

import { EnvironmentListDataResolver } from '@app/shared/resolvers/environment-list-data.resolver';
import { FolderStructureTreeDataResolver } from '@app/shared/resolvers/folder-structure-tree-data.resolver';
import { LanVPCListDataResolver } from '@app/shared/resolvers/lan-vpc-list-data.resolver';
import { BreadcrumbsComponent } from '@app/shared/breadcrumbs/breadcrumbs.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LandingZoneEnvironmentComponent,
    resolve: {
      environmentListData: EnvironmentListDataResolver,
      folderStructureTreeData: FolderStructureTreeDataResolver,
      lanVPCListData: LanVPCListDataResolver
    }
  }
];

@NgModule({
  declarations: [LandingZoneEnvironmentComponent],
  imports: [
    CommonModule,
    LandingZoneDialogModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([LandingZoneEnvironmentEffects]),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatTooltipModule,
    MatTreeModule,
    SharedModule
  ]
})
export class LandingZoneEnvironmentModule {}
