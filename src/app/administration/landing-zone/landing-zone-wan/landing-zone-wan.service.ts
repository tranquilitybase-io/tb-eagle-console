import {
  createWanConfigurationSuccess,
  createWanConfigurationError,
  updateWanConfigurationSuccess,
  updateWanConfigurationError
} from './landing-zone-wan.actions';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WanConfiguration } from './landing-zone-wan.model';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class LandingZoneWanService extends EntityCollectionServiceBase<WanConfiguration> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('LandingZoneWan', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  private createWanConfigurationSuccess = (val: WanConfiguration) => {
    console.log('POST call successful value returned in body', val);
    this.store.dispatch(createWanConfigurationSuccess());
  };

  private createWanConfigurationError = (error: any) => {
    console.log('POST call in error', error);
    this.store.dispatch(createWanConfigurationError({ error }));
  };

  createWanConfiguration(wanConfiguration: WanConfiguration): void {
    const url = `${this.BASE_URL}/landingzonewan/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, wanConfiguration, { headers })
      .subscribe(this.createWanConfigurationSuccess, this.createWanConfigurationError, () => {
        console.log('The POST observable is now completed.');
        this.getAll();
      });
    console.log(wanConfiguration + ' posted');
  }

  private updateWanConfigurationSuccess = (val: WanConfiguration) => {
    console.log('PUT call successful value returned in body', val);
    this.store.dispatch(updateWanConfigurationSuccess());
  };

  private updateWanConfigurationError = (error: any) => {
    console.log('PUT call in error', error);
    this.store.dispatch(updateWanConfigurationError({ error }));
  };

  updateWanConfiguration(wanConfiguration: WanConfiguration): void {
    const url = `${this.BASE_URL}/landingzonewan/${wanConfiguration.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .put(url, wanConfiguration, { headers })
      .subscribe(this.updateWanConfigurationSuccess, this.updateWanConfigurationError, () => {
        console.log('The PUT observable is now completed.');
        this.getAll();
      });
    console.log(wanConfiguration + ' put');
  }
}
