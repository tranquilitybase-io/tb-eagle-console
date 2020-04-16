import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { KeyValue } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatorCategory } from '@app/mission-control/activator-store/activator-store.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private BASE_URL = `${globalThis.location.origin}/api`;

  constructor(private http: HttpClient) {}

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

  getBusinessUnit(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/businessUnit/`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getContinuousDeployment(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/cd/`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getContinuousIntegration(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/ci/`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getEnvironment(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/environment/`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getSourceControl(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/sourceControl/`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getTeam(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/team/`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }
}
