import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-zone-folder-home/landing-zone-folder-home.module').then(m => m.LandingZoneFolderHomeModule)
    // },
    // {
    //   path: 'forms',
    //   loadChildren: () =>
    //     import('./landing-zone-folder-forms/landing-zone-folder-forms.module').then(m => m.LandingZoneFolderFormsModule)
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LandingZoneFolderModule {}
