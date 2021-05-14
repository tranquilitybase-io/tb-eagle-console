import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private prepareHeaders = () => {
    const id_token = localStorage.getItem('id_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: id_token ? `Bearer ${id_token}` : '',
    });
  };

  createSettings = (settings: Settings): Observable<Settings> =>
    this.http.post<Settings>(this.url, settings, { headers: this.prepareHeaders() });
  deleteSettings = (): Observable<Settings> => this.http.delete<any>(this.url, { headers: this.prepareHeaders() });
  getSettings = (): Observable<Settings> => this.http.get<Settings>(this.url, { headers: this.prepareHeaders() });
  updateSettings = (settings: Settings): Observable<Settings> =>
    this.http.put<Settings>(this.url, settings, { headers: this.prepareHeaders() });
}
