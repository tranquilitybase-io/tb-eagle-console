import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { InterceptorModule } from './interceptor/interceptor.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';
import entityConfig from './entity-metadata';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: '/home',
        //redirectTo: '/mission-control/solutions',
        pathMatch: 'full',
      },
      {
        path: 'mission-control',
        loadChildren: () => import('./mission-control/mission-control.module').then((m) => m.MissionControlModule),
      },
      {
        path: 'administration',
        loadChildren: () => import('./administration/administration.module').then((m) => m.AdministrationModule),
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: `${globalThis.location.origin}/api`,
  timeout: 1000 * 60,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    LoginModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    HttpClientModule,
    InterceptorModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [AuthGuardService, { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
