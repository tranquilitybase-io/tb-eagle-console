import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    IconComponent,
    BreadcrumbsComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    IconComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    RouterModule
  ]
})
export class SharedModule { }
