import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends EntityCollectionServiceBase<User> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('User', serviceElementsFactory);
  }
}
