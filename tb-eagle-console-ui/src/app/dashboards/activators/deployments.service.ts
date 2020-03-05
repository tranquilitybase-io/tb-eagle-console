import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Deployment } from './activators.model';

@Injectable()
export class DeploymentsService extends EntityCollectionServiceBase<Deployment> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Deployment', serviceElementsFactory);
  }

  fetchMetaDataForDeployments(): Observable<{ length: number }> {
    return this.http.get<{ length: number }>('/api/deployment_meta');
  }
}
