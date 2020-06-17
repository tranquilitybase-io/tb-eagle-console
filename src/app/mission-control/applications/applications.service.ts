import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Application } from './applications.model';
import { Router } from '@angular/router';

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
}
