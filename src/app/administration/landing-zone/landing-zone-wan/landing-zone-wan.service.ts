import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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

  createWanConfiguration(wanConfiguration: WanConfiguration): void {
    const url = `${this.BASE_URL}/landingzonewan/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, wanConfiguration, { headers }).subscribe(
      (val: WanConfiguration) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
        this.getAll();
      }
    );
    console.log(wanConfiguration + ' posted');
  }

  displayWanConfiguration(view: WanConfiguration): void {
    // landingzonewands ??? <- swagger
    const url = `${this.BASE_URL}/landingzonewan/${view.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get(url, { headers }).subscribe(
      (val: WanConfiguration) => {
        console.log('GET call successful value returned in body', val);
      },
      response => {
        console.log('GET call in error', response);
      },
      () => {
        console.log('The GET observable is now completed.');
        this.getAll();
      }
    );
    console.log(view + ' get');
  }
}
