import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Solution } from './solutions.model';
import { startDeployment } from '../solutions/solutions.actions';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService extends EntityCollectionServiceBase<Solution> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Solution', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

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

  updateSolution(solution: Solution): void {
    // console.log('123', solution, Solution);
    const url = `${this.BASE_URL}/solution/${solution.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, solution, { headers }).subscribe(
      (val: Solution) => {
        console.log('PUT call successful value returned in body', val);
        this.store.dispatch(startDeployment({ name: String(val.id) }));
      },
      response => {
        console.log('PUT call in error', response);
      },
      () => {
        console.log('The PUT observable is now completed.');
        this.getAll();
      }
    );
    console.log(solution + ' putted');
  }

  getSolutionsData(): Observable<Solution> {
    const url = `${this.BASE_URL}/edit/`;
    return this.http.get<Solution>(url).pipe(catchError(this.handleError));
  }
}
