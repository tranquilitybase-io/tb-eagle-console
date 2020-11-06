import { Observable } from 'rxjs';
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

  createWanConfiguration(wanConfiguration: WanConfiguration): Observable<WanConfiguration> {
    const url = `${this.BASE_URL}/landingzonewan/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, wanConfiguration, { headers }) as Observable<WanConfiguration>;
  }

  updateWanConfiguration(wanConfiguration: WanConfiguration): Observable<WanConfiguration> {
    const url = `${this.BASE_URL}/landingzonewan/${wanConfiguration.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url, wanConfiguration, { headers }) as Observable<WanConfiguration>;
  }
}
