import {
  createTeamDataError,
  createTeamDataSuccess,
  updateTeamDataError,
  updateTeamDataSuccess
} from './teams.actions';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Team } from './teams.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';

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
}
