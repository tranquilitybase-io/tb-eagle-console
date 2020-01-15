import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { SolutionSelectComponent } from './solution-select/solution-select.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';
import { CreateSolutionComponent } from './create-solution/create-solution.component';
import { SolutionLandingComponent } from './solution-landing/solution-landing.component';

const routes: Routes = [
  {
    path: '',
    component: SolutionLandingComponent
  },
  {
    path: 'create',
    component: CreateSolutionComponent
  }
];

@NgModule({
  declarations: [SolutionSelectComponent, SolutionDetailsComponent, CreateSolutionComponent, SolutionLandingComponent],

  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class SolutionsModule {}
