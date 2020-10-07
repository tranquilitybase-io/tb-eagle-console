import {
  createTeamDataSuccess,
  createTeamDataError,
  updateTeamDataSuccess,
  updateTeamDataError
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

  private postTeamSuccess = (team: Team) => {
    console.log('POST call successful value returned in body', team);
    this.store.dispatch(createTeamDataSuccess());
  };

  private postTeamError = (error: any) => {
    console.log('POST call in error', error);
    this.store.dispatch(createTeamDataError(error));
  };

  postTeamData(team: Team): void {
    const url = `${this.BASE_URL}/team/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, team, { headers }).subscribe(this.postTeamSuccess, this.postTeamError, () => {
      console.log('The POST observable is now completed.');
      this.getAll();
    });
    console.log(team + ' posted');
  }

  private updateTeamSuccess = (team: Team) => {
    console.log('PUT call successful value returned in body', team);
    this.store.dispatch(updateTeamDataSuccess());
  };

  private updateTeamError = (error: any) => {
    console.log('PUT call in error', error);
    this.store.dispatch(updateTeamDataError(error));
  };

  updateTeamData(team: Team): void {
    const url = `${this.BASE_URL}/team/${team.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, team, { headers }).subscribe(this.updateTeamSuccess, this.updateTeamError, () => {
      console.log('The PUT observable is now completed.');
      this.getAll();
    });
    console.log(team + ' put');
  }

  getTeamKeyValues(): Observable<KeyValue<number, string>[]> {
    const url = `${this.BASE_URL}/keyValues/team/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<KeyValue<number, string>[]>(url, { headers });
  }
}
