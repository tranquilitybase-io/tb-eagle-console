import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const material = [MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatIconModule, MatMenuModule];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
