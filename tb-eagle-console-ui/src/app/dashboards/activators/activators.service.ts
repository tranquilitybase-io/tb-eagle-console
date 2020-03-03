import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Activator } from './activators.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivatorsService extends EntityCollectionServiceBase<Activator> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Activator', serviceElementsFactory);
  }
  private BASE_URL = 'http://localhost:3000/api';

  setDeprecated(id: number) {
    const url = `${this.BASE_URL}/activator/${id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.patch(url, { status: 'Deprecated' }, { headers }).subscribe(
      val => {
        console.log('PATCH call successful value returned in body', val);
      },
      response => {
        console.log('PATCH call in error', response);
      },
      () => {
        console.log('The PATCH observable is now completed.');
        this.getAll();
      }
    );
    console.log('Deprecated status set to activator: ' + id);
  }

  setLocked(id: number) {
    const url = `${this.BASE_URL}/activator/${id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.patch(url, { status: 'Locked' }, { headers }).subscribe(
      val => {
        console.log('PATCH call successful value returned in body', val);
      },
      response => {
        console.log('PATCH call in error', response);
      },
      () => {
        console.log('The PATCH observable is now completed.');
        this.getAll();
      }
    );
    console.log('Locked status set to activator: ' + id);
  }
}
