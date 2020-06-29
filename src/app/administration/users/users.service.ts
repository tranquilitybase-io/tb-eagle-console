import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@app/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends EntityCollectionServiceBase<User> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('User', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  createUserData(user: User): void {
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

  updateUserData(user: User): void {
    const url = `${this.BASE_URL}/user/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, user, { headers }).subscribe(
      (val: User) => {
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
    console.log(user + ' put');
  }
}
