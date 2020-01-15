import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Application } from './interfaces';

@Injectable()
export class ActivatorsService extends EntityCollectionServiceBase<Application> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Application', serviceElementsFactory);
  }
}
