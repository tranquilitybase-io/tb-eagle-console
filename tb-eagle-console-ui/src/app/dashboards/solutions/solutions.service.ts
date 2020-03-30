import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Solution, Application } from './solutions.model';
import { startDeployment } from '../solutions/solutions.actions';
import { KeyValue } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SolutionsService extends EntityCollectionServiceBase<Solution> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
    private router: Router
  ) {
    super('Solution', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  createSolution(solution: Solution): void {
    const url = `${this.BASE_URL}/solution/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, solution, { headers }).subscribe(
      (val: Solution) => {
        console.log('POST call successful value returned in body', val);
        this.store.dispatch(startDeployment({ name: String(val.id) }));
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
        this.getAll();
      }
    );
    console.log(solution + ' posted');
  }

  appendApplication(solution: Solution, application: Application): void {
    const url = `${this.BASE_URL}/solution/${solution.id}/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, { applications: [...solution.applications, application] }, { headers }).subscribe(
      val => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
        this.router.navigateByUrl(`/dashboard/solutions/view?id=${solution.id}&categorySwitch=Applications`);
      }
    );
    console.log(application + ' appended to solution: ' + solution);
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

  getBusinessUnit(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/businessUnit`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getContinuousDeployment(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/cd`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getContinuousIntegration(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/ci`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getEnvironment(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/environment`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getSourceControl(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/sourceControl`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }
}
