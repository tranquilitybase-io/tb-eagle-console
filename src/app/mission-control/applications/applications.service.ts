import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Application, ApplicationDeployment } from './applications.model';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService extends EntityCollectionServiceBase<Application> {
  private BASE_URL = `${globalThis.location.origin}/api`;

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
    private router: Router
  ) {
    super('Application', serviceElementsFactory);
  }

  createApplication(application: Application) {
    const url = `${this.BASE_URL}/application/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, { ...application, solutionId: Number(application.solutionId) }, { headers });
  }

  deployApplication(id: number) {
    const url = `${this.BASE_URL}/applicationDeployment/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, { id }, { headers });
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

  getDeployments(): Observable<ApplicationDeployment[]> {
    const url = `${this.BASE_URL}/applicationDeployments/`;
    return this.http.get<ApplicationDeployment[]>(url).pipe(catchError(this.handleError));
  }
}
