import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Application, ApplicationDeployment } from './applications.model';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { setApplicationDeploymentsData } from './applications.actions';

@Injectable({
  providedIn: 'root'
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

  createApplication(application: Application): void {
    const url = `${this.BASE_URL}/application/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, { ...application, solutionId: Number(application.solutionId) }, { headers }).subscribe(
      val => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
        this.router.navigateByUrl(
          `/mission-control/solutions/view?id=${application.solutionId}&categorySwitch=Applications`
        );
      }
    );
    console.log(application + ' created.');
  }

  deployApplication(id: number): void {
    const url = `${this.BASE_URL}/applicationDeployment/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, { id }, { headers }).subscribe(
      (val: Application) => {
        this.store.dispatch(setApplicationDeploymentsData({ applicationDeploymentsData: null }));
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
    console.log(`Application ${id} is been deployed`);
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
