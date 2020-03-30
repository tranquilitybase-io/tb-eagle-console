import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Activator } from './activators.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { KeyValue } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from '@app/login/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivatorsService extends EntityCollectionServiceBase<Activator> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Activator', serviceElementsFactory);
  }
  private BASE_URL = `${environment.apiUrl}/api`;

  private postSuccess = val => {
    console.log('POST call successful value returned in body', val);
  };

  private postError = err => {
    console.log('POST call in error', err);
  };

  private postCompleted = () => {
    console.log('The POST observable is now completed.');
    this.getAll();
  };

  setDeprecated(id: number) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, status: 'Deprecated' }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Deprecated status set to activator: ' + id);
  }

  setLocked(id: number) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, status: 'Locked' }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Locked status set to activator: ' + id);
  }

  denyAccess(activatorId: number, teamId: string) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id: activatorId, status: 'Locked', accessRequestedBy: null }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Locked status set to activator: ' + activatorId);
  }

  grantAccess(activatorId: number, teamId: string) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id: activatorId, status: 'Available', accessRequestedBy: null }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Available status set to activator: ' + activatorId);
  }

  requestAccess(id: number, user: User) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, accessRequestedBy: user }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log(`Access requested to activator ${id} by user ${user.id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getTeam(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/team`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }
}
