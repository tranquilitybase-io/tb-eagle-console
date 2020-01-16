import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetProgressOnInitComponent } from './set-progress-on-init/set-progress-on-init.component';

@NgModule({
  declarations: [SetProgressOnInitComponent],
  imports: [CommonModule],
  exports: [SetProgressOnInitComponent]
})
export class SharedModule {}
