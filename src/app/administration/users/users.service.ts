import {
  createUserDataError,
  createUserDataSuccess,
  updateUserDataError,
  updateUserDataSuccess
} from './users.actions';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends EntityCollectionServiceBase<User> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('User', serviceElementsFactory);
  }
}
