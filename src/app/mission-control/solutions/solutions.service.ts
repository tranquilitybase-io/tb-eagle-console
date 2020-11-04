import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SolutionDeployment } from './solutions.model';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Solution', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  deploySolution(id: number) {
    const url = `${this.BASE_URL}/solutiondeployment/`;

    const id_token = localStorage.getItem('id_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: id_token ? `Bearer ${id_token}` : ''
    });

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

  getDeployments(): Observable<SolutionDeployment[]> {
    const url = `${this.BASE_URL}/solutiondeployments/`;
    return this.http.get<SolutionDeployment[]>(url).pipe(catchError(this.handleError));
  }
}
