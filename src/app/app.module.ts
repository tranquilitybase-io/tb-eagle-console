import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import entityConfig from './entity-metadata';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './guards/auth-guard.service';
import { AdminGuardService } from './guards/admin-guard.service';
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatTooltipModule
} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mission-control/solutions',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mission-control',
    loadChildren: () => import('./mission-control/mission-control.module').then(m => m.MissionControlModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'administration',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
    canActivate: [AuthGuardService, AdminGuardService]
  }
];

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: `${globalThis.location.origin}/api`,
  timeout: 1000 * 60
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,

    LoginModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuardService,
    AdminGuardService,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
