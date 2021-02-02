import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { QueryParam } from './users-home/users-home-filter/users-home-filter.model';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends EntityCollectionServiceBase<User> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('User', serviceElementsFactory);
  }
  private BASE_URL = `${globalThis.location.origin}/api`;

  getUsers(queryParams: QueryParam[]): Observable<User[]> {
    const url = `${this.BASE_URL}/solutions/`;
    let params = new HttpParams();
    for (let obj of queryParams) {
      params = params.append(obj.key, obj.value);
    }
    return this.http.get<User[]>(url, { params });
  }
}
