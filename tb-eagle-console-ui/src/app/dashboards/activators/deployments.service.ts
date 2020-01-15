import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Deployment } from './interfaces';

@Injectable()
export class DeploymentsService extends EntityCollectionServiceBase<Deployment> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Deployment', serviceElementsFactory);
  }
}
