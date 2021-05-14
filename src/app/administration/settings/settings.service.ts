import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Settings } from './settings.model';

@Injectable({
  providedIn: 'root',
})
export class SettingsService extends EntityCollectionServiceBase<Settings> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Settings', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;
  private url = `${this.BASE_URL}/settings/`;

  createSettings = (settings: Settings): Observable<Settings> => this.http.post<Settings>(this.url, settings);
  deleteSettings = (): Observable<Settings> => this.http.delete<any>(this.url);
  getSettings = (): Observable<Settings> => this.http.get<Settings>(this.url);
  updateSettings = (settings: Settings): Observable<Settings> => this.http.put<Settings>(this.url, settings);
}
