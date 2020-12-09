import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Activator, ActivatorCategory, ActivatorsMetadata, ActivatorsQueryParams } from './activator-store.model';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
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

  setDeprecated(id: number): Observable<Activator> {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, { id, status: 'Deprecated', accessRequestedById: 0 }, { headers }) as Observable<
      Activator
    >;
  }

  setLocked(id: number): Observable<Activator> {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, { id, status: 'Locked', accessRequestedById: 0 }, { headers }) as Observable<Activator>;
  }

  denyAccess(activatorId: number, teamId: string): Observable<Activator> {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(
      url,
      { id: activatorId, status: 'Locked', accessRequestedById: 0 },
      { headers }
    ) as Observable<Activator>;
  }

  grantAccess(activatorId: number, teamId: string): Observable<Activator> {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(
      url,
      { id: activatorId, status: 'Available', accessRequestedById: 0 },
      { headers }
    ) as Observable<Activator>;
  }

  requestAccess(id: number, user: User): Observable<Activator> {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, { id, accessRequestedById: user.id }, { headers }) as Observable<Activator>;
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
    return this.http.get<ActivatorCategory[]>(url);
  }

  getActivators(queryParams: ActivatorsQueryParams): Observable<Activator[]> {
    let params = new HttpParams();
    for (let [key, value] of Object.entries(queryParams)) {
      params = params.append(key, value);
    }

    if (queryParams.category === 'All') {
      params = params.delete('category');
    }

    const url = `${this.BASE_URL}/activators/`;
    return this.http.get<Activator[]>(url, { params });
  }

  createActivatorByURL(repoURL: string): Observable<Activator> {
    const url = `${this.BASE_URL}/activatorByURL/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, { url: repoURL }, { headers }) as Observable<Activator>;
  }

  updateActivator(activatorData: Activator): Observable<Activator> {
    const url = `${this.BASE_URL}/activator/${activatorData.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url, activatorData, { headers }) as Observable<Activator>;
  }

  onboardActivator(activatorData: Activator): Observable<any> {
    const url = `${this.BASE_URL}/activatorOnboard/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(
      url,
      {
        id: activatorData.id
      },
      { headers }
    );
  }
}
