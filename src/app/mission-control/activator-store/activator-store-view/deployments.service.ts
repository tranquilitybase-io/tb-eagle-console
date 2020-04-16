import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Application } from '@app/mission-control/solutions/solutions.model';

@Injectable()
export class DeploymentsService extends EntityCollectionServiceBase<Application> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Application', serviceElementsFactory);
  }

  // fetchMetaDataForDeployments(): Observable<{ length: number }> {
  //   return this.http.get<{ length: number }>('/api/application_meta');
  // }
}
