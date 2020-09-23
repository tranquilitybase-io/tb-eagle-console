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

  postTeamData(team: Team): void {
    const url = `${this.BASE_URL}/team/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, team, { headers }).subscribe(
      (val: Team) => {
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
    console.log(team + ' posted');
  }

  updateTeamData(team: Team): void {
    const url = `${this.BASE_URL}/team/${team.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, team, { headers }).subscribe(
      (val: Team) => {
        console.log('PUT call successful value returned in body', val);
      },
      response => {
        console.log('PUT call in error', response);
      },
      () => {
        console.log('The PUT observable is now completed.');
        this.getAll();
      }
    );
    console.log(team + ' put');
  }

  getTeamKeyValues(): Observable<KeyValue<number, string>[]> {
    const url = `${this.BASE_URL}/keyValues/team/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<KeyValue<number, string>[]>(url, { headers });
  }
}
