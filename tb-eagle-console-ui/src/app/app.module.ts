import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';

import { AppComponent } from './app.component';
import entityConfig from './entity-metadata';
import { OnlyLoggedInUsersGuard } from './only-logged-in-user-guard.service';
import { UserLoginService } from './user-login.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/solutions',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule),
    // canActivate: [OnlyLoggedInUsersGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    HttpClientModule
  ],
  providers: [UserLoginService, OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

