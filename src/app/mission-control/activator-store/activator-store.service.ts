import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Activator } from './activator-store.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@app/login/login.model';
import { Application } from '../solutions/solutions.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivatorStoreService extends EntityCollectionServiceBase<Activator> {
  private BASE_URL = `${globalThis.location.origin}/api`;

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
    private router: Router
  ) {
    super('Activator', serviceElementsFactory);
  }

  private postSuccess = val => {
    console.log('POST call successful value returned in body', val);
  };

  private postError = err => {
    console.log('POST call in error', err);
  };

  private postCompleted = () => {
    console.log('The POST observable is now completed.');
    this.getAll();
  };

  setDeprecated(id: number) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, status: 'Deprecated', accessRequestedBy: 0 }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Deprecated status set to activator: ' + id);
  }

  setLocked(id: number) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, status: 'Locked', accessRequestedBy: 0 }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Locked status set to activator: ' + id);
  }

  denyAccess(activatorId: number, teamId: string) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id: activatorId, status: 'Locked', accessRequestedBy: 0 }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Locked status set to activator: ' + activatorId);
  }

  grantAccess(activatorId: number, teamId: string) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id: activatorId, status: 'Available', accessRequestedBy: 0 }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log('Available status set to activator: ' + activatorId);
  }

  requestAccess(id: number, user: User) {
    const url = `${this.BASE_URL}/setactivatorstatus/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, { id, accessRequestedBy: user.id }, { headers })
      .subscribe(this.postSuccess, this.postError, this.postCompleted);
    console.log(`Access requested to activator ${id} by user ${user.id}`);
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
}
