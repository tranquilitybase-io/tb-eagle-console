import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Team } from './teams.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';
import { QueryParam } from './teams-home/teams-home-filter/teams-home-filter.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService extends EntityCollectionServiceBase<Team> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Team', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  getTeamKeyValues(): Observable<KeyValue<number, string>[]> {
    const url = `${this.BASE_URL}/keyValues/team/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<KeyValue<number, string>[]>(url, { headers });
  }

  getTeams(queryParams: QueryParam[]): Observable<Team[]> {
    const url = `${this.BASE_URL}/teams/`;
    let params = new HttpParams();
    for (let obj of queryParams) {
      params = params.append(obj.key, obj.value);
    }
    return this.http.get<Team[]>(url, { params });
  }
}
