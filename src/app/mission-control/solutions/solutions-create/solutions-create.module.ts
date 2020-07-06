import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsCreateComponent } from './solutions-create.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusinessUnitResolver } from '@app/shared/resolvers/business-unit.resolver';
import { ContinuousDeploymentResolver } from '@app/shared/resolvers/continuous-deployment.resolver';
import { ContinuousIntegrationResolver } from '@app/shared/resolvers/continuous-integration.resolver';
import { EnvironmentResolver } from '@app/shared/resolvers/environment.resolver';
import { SourceControlResolver } from '@app/shared/resolvers/source-control.resolver';
import { TeamResolver } from '@app/shared/resolvers/team.resolver';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

const routes: Routes = [
  {
    path: '',
    component: SolutionsCreateComponent,
    resolve: {
      businessUnitList: BusinessUnitResolver,
      cdList: ContinuousDeploymentResolver,
      ciList: ContinuousIntegrationResolver,
      environmentList: EnvironmentResolver,
      sourceControlList: SourceControlResolver,
      teamList: TeamResolver
    }
  }
];

@NgModule({
  declarations: [SolutionsCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule
  ]
})
export class SolutionsCreateModule {}
