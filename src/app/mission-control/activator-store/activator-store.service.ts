import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Activator, ActivatorCategory, ActivatorsMetadata } from './activator-store.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '@app/login/login.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivatorStoreService extends EntityCollectionServiceBase<Activator> {
  private BASE_URL = `${globalThis.location.origin}/api`;

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Activator', serviceElementsFactory);
  }

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
      .post(url, { id, status: 'Deprecated', accessRequestedBy: 0 }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Deprecated status set to activator: ' + id);
  }

  setLocked(id: number) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, status: 'Locked', accessRequestedBy: 0 }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Locked status set to activator: ' + id);
  }

  denyAccess(activatorId: number, teamId: string) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id: activatorId, status: 'Locked', accessRequestedBy: 0 }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Locked status set to activator: ' + activatorId);
  }

  grantAccess(activatorId: number, teamId: string) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id: activatorId, status: 'Available', accessRequestedBy: 0 }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Available status set to activator: ' + activatorId);
  }

  requestAccess(id: number, user: User) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, accessRequestedBy: user.id }, { headers })
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

  getMetadata(): Observable<ActivatorsMetadata> {
    const url = `${this.BASE_URL}/activator_meta/`;
    return this.http.get<ActivatorsMetadata>(url).pipe(catchError(this.handleError));
  }

  getActivatorCategories(): Observable<ActivatorCategory[]> {
    const url = `${this.BASE_URL}/activatorcategories/`;
    return this.http.get<ActivatorCategory[]>(url).pipe(catchError(this.handleError));
  }

  getByCategory(category: string): Observable<Activator[]> {
    const params = category === 'All' ? null : { category };
    const url = `${this.BASE_URL}/activators/`;
    return this.http
      .get<Activator[]>(url, { params })
      .pipe(catchError(this.handleError));
  }
}
