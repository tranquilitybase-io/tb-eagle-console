import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { SolutionsViewAppGridCardComponent } from './solutions-view-app-grid/solutions-view-app-grid-card/solutions-view-app-grid-card.component';
import { SolutionsViewAppGridComponent } from './solutions-view-app-grid/solutions-view-app-grid.component';
import { SolutionsViewComponent } from './solutions-view.component';
import { SolutionsViewSelectComponent } from './solutions-view-select/solutions-view-select.component';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SolutionsViewWorkspaceInfoComponent } from './solutions-view-workspace-info/solutions-view-workspace-info.component';
import { MatMenuModule } from '@angular/material/menu';
//import { ApplicationByIdResolver} from '@app/shared/resolvers/application-by-id.resolver';
import { ActivatorByIdResolver } from '@app/shared/resolvers/activator-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: SolutionsViewComponent
  }
];

@NgModule({
  declarations: [
    SolutionsViewAppGridCardComponent,
    SolutionsViewAppGridComponent,
    SolutionsViewComponent,
    SolutionsViewSelectComponent,
    SolutionsViewWorkspaceInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ]
})
export class SolutionsViewModule {}
