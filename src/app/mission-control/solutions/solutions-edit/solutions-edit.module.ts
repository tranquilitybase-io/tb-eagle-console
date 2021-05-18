import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsEditComponent } from './solutions-edit.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusinessUnitResolver } from '@app/shared/resolvers/business-unit.resolver';
import { ContinuousDeploymentResolver } from '@app/shared/resolvers/continuous-deployment.resolver';
import { ContinuousIntegrationResolver } from '@app/shared/resolvers/continuous-integration.resolver';
import { EnvironmentResolver } from '@app/shared/resolvers/environment.resolver';
import { SolutionsViewResolver } from '@app/shared/resolvers/solutions-view.resolver';
import { SourceControlResolver } from '@app/shared/resolvers/source-control.resolver';
import { TeamResolver } from '@app/shared/resolvers/team.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: SolutionsEditComponent,
    resolve: {
      businessUnitList: BusinessUnitResolver,
      cdList: ContinuousDeploymentResolver,
      ciList: ContinuousIntegrationResolver,
      environmentList: EnvironmentResolver,
      solution: SolutionsViewResolver,
      sourceControlList: SourceControlResolver,
      teamList: TeamResolver,
    },
  },
];

@NgModule({
  declarations: [SolutionsEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
  ],
})
export class SolutionsViewEditModule {}
