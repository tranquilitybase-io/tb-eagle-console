import {
  createUserDataError,
  createUserDataSuccess,
  updateUserDataError,
  updateUserDataSuccess
} from './users.actions';
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

  private createUserDataSuccess = (user: User) => {
    console.log('POST call successful value returned in body', user);
    this.store.dispatch(createUserDataSuccess());
  };

  private createUserDataError = (error: any) => {
    console.log('POST call in error', error);
    this.store.dispatch(createUserDataError(error));
  };

  createUserData(user: User): void {
    const url = `${this.BASE_URL}/user/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, user, { headers }).subscribe(this.createUserDataSuccess, this.createUserDataError, () => {
      console.log('The POST observable is now completed.');
      this.getAll();
    });
    console.log(user + ' posted');
  }

  updateUserDataSuccess = (user: User) => {
    console.log('PUT call successful value returned in body', user);
    this.store.dispatch(updateUserDataSuccess());
  };

  updateUserDataError = (error: any) => {
    console.log('PUT call in error', error);
    this.store.dispatch(updateUserDataError(error));
  };

  updateUserData(user: User): void {
    const url = `${this.BASE_URL}/user/${user.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, user, { headers }).subscribe(this.updateUserDataSuccess, this.updateUserDataError, () => {
      console.log('The PUT observable is now completed.');
      this.getAll();
    });
    console.log(user + ' put');
  }
}
