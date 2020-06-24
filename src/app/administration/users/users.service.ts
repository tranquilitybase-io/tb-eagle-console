import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { User } from './users.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends EntityCollectionServiceBase<User> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('User', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  postUserData(user: User): void {
    const url = `${this.BASE_URL}/user/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, user, { headers }).subscribe(
      (val: User) => {
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
    console.log(user + ' posted');
  }
}
