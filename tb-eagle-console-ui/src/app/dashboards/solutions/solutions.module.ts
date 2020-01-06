import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { SolutionsComponent } from './solutions/solutions.component';
import { SolutionSelectComponent } from './solution-select/solution-select.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';
import { CreateSolutionComponent } from './create-solution/create-solution.component';


const routes: Routes = [
  {
    path: '',
    component: SolutionsComponent
  }
];


@NgModule({

  declarations: [
    SolutionsComponent,
    SolutionSelectComponent,
    SolutionDetailsComponent, 
    CreateSolutionComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SolutionsModule { }
