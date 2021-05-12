import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { SharedServicesProgressItem } from './shared-services.model';

@Injectable({
  providedIn: 'root',
})
export class SharedServicesService extends EntityCollectionServiceBase<SharedServicesProgressItem> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('SharedServicesProgressItem', serviceElementsFactory);
  }
}
