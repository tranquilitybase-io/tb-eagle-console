import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Solution, SolutionDeployment } from './solutions.model';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  createSolutionSuccess,
  createSolutionError,
  updateSolutionSuccess,
  updateSolutionError
} from './solutions.actions';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Solution', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  private createSolutionSuccess = (val: Solution) => {
    console.log('POST call successful value returned in body', val);
    this.store.dispatch(createSolutionSuccess());
  };

  private createSolutionError = (error: any) => {
    console.log('POST call in error', error);
    this.store.dispatch(createSolutionError(error));
  };

  createSolution(solution: Solution): void {
    const url = `${this.BASE_URL}/solution/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, solution, { headers }).subscribe(this.createSolutionSuccess, this.createSolutionError, () => {
      console.log('The POST observable is now completed.');
      this.getAll();
    });
    console.log(solution + ' posted');
  }

  deploySolution(id: number): void {
    const url = `${this.BASE_URL}/solutiondeployment/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, { id }, { headers }).subscribe(
      (val: Solution) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
        this.getAll();
      }
    );
    console.log(`Solution ${id} is been deployed`);
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

  getDeployments(): Observable<SolutionDeployment[]> {
    const url = `${this.BASE_URL}/solutiondeployments/`;
    return this.http.get<SolutionDeployment[]>(url).pipe(catchError(this.handleError));
  }

  private updateSolutionSuccess = (val: Solution) => {
    console.log('PUT call successful value returned in body', val);
    this.store.dispatch(updateSolutionSuccess());
  };

  private updateSolutionError = (error: any) => {
    console.log('PUT call in error', error);
    this.store.dispatch(updateSolutionError(error));
  };

  updateSolution(solution: Solution): void {
    const url = `${this.BASE_URL}/solution/${solution.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, solution, { headers }).subscribe(this.updateSolutionSuccess, this.updateSolutionError, () => {
      console.log('The PUT observable is now completed.');
      this.getAll();
    });
    console.log(solution + ' put');
  }
}
