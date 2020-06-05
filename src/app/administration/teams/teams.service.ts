import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Team } from './teams.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService extends EntityCollectionServiceBase<Team> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Team', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  createTeam(team: Team): void {
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
}
