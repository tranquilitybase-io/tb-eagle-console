import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Activator, ActivatorCategory, ActivatorsMetadata } from './activator-store.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '@app/login/login.model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  createActivatorByURLError,
  createActivatorByURLSuccess,
  denyAccessError,
  denyAccessSuccess,
  grantAccessError,
  grantAccessSuccess,
  requestAccessError,
  requestAccessSuccess,
  setActivatorsCount,
  setDeprecatedError,
  setDeprecatedSuccess,
  setLockedError,
  setLockedSuccess,
  updateActivatorError,
  updateActivatorSuccess
} from './activator-store.actions';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivatorStoreService extends EntityCollectionServiceBase<Activator> {
  private BASE_URL = `${globalThis.location.origin}/api`;

  constructor(
    private route: ActivatedRoute,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient
  ) {
    super('Activator', serviceElementsFactory);
  }

  private postCompleted = () => {
    console.log('The POST observable is now completed.');
    this.getByCategory(this.route.snapshot.queryParams.categorySwitch).subscribe((activators: Activator[]) => {
      this.store.dispatch(setActivatorsCount({ activatorsCount: activators.length }));
    });
  };

  private setDeprecatedSuccess = (activatorData: Activator) => {
    console.log('POST call successful value returned in body', activatorData);
    this.store.dispatch(setDeprecatedSuccess({ activatorData }));
  };

  private setDeprecatedError = (error: any) => {
    this.store.dispatch(setDeprecatedError({ error }));
  };

  setDeprecated(id: number) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, status: 'Deprecated', accessRequestedById: 0 }, { headers })
      .subscribe(this.setDeprecatedSuccess, this.setDeprecatedError);
    console.log('Deprecated status set to activator: ' + id);
  }

  private setLockedSuccess = (activatorData: Activator) => {
    console.log('POST call successful value returned in body', activatorData);
    this.store.dispatch(setLockedSuccess({ activatorData }));
  };

  private setLockedError = (error: any) => {
    this.store.dispatch(setLockedError({ error }));
  };

  setLocked(id: number) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, status: 'Locked', accessRequestedById: 0 }, { headers })
      .subscribe(this.setLockedSuccess, this.setLockedError, this.postCompleted);
    console.log('Locked status set to activator: ' + id);
  }

  private denyAccessSuccess = (activatorData: Activator) => {
    console.log('POST call successful value returned in body', activatorData);
    this.store.dispatch(denyAccessSuccess({ activatorData }));
  };

  private denyAccessError = (error: any) => {
    this.store.dispatch(denyAccessError({ error }));
  };

  denyAccess(activatorId: number, teamId: string) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id: activatorId, status: 'Locked', accessRequestedById: 0 }, { headers })
      .subscribe(this.denyAccessSuccess, this.denyAccessError, this.postCompleted);
    console.log('Locked status set to activator: ' + activatorId);
  }

  private grantAccessSuccess = (activatorData: Activator) => {
    console.log('POST call successful value returned in body', activatorData);
    this.store.dispatch(grantAccessSuccess({ activatorData }));
  };

  private grantAccessError = (error: any) => {
    this.store.dispatch(grantAccessError({ error }));
  };

  grantAccess(activatorId: number, teamId: string) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id: activatorId, status: 'Available', accessRequestedById: 0 }, { headers })
      .subscribe(this.grantAccessSuccess, this.grantAccessError, this.postCompleted);
    console.log('Available status set to activator: ' + activatorId);
  }

  private requestAccessSuccess = (activatorData: Activator) => {
    console.log('POST call successful value returned in body', activatorData);
    this.store.dispatch(requestAccessSuccess({ activatorData }));
  };

  private requestAccessError = (error: any) => {
    this.store.dispatch(requestAccessError({ error }));
  };

  requestAccess(id: number, user: User) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, accessRequestedById: user.id }, { headers })
      .subscribe(this.requestAccessSuccess, this.requestAccessError, this.postCompleted);
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
    return this.http.get<Activator[]>(url, { params });
  }

  private createActivatorByURLSuccess = (activatorData: Activator) => {
    this.store.dispatch(createActivatorByURLSuccess({ activatorData }));
    console.log('POST call successful value returned in body', activatorData);
  };

  private createActivatorByURLError = error => {
    this.store.dispatch(createActivatorByURLError({ error }));
    console.log('POST call in error', error);
  };

  createActivatorByURL(repoURL: string): void {
    const url = `${this.BASE_URL}/activatorByURL/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { url: repoURL }, { headers })
      .subscribe(this.createActivatorByURLSuccess, this.createActivatorByURLError, this.postCompleted);
  }

  private updateActivatorSuccess = (activatorData: Activator) => {
    this.store.dispatch(updateActivatorSuccess({ activatorData }));
    console.log('POST call successful value returned in body', activatorData);
  };

  private updateActivatorError = error => {
    this.store.dispatch(updateActivatorError({ error }));
    console.log('POST call in error', error);
  };

  updateActivator(activatorData: Activator): void {
    const url = `${this.BASE_URL}/activator/${activatorData.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, activatorData, { headers }).subscribe(this.updateActivatorSuccess, this.updateActivatorError);
  }
}
