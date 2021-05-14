import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { SharedServicesAction } from '../shared-services.model';

@Injectable({
  providedIn: 'root',
})
export class SharedServicesHomeService extends EntityCollectionServiceBase<SharedServicesAction> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('SharedServicesAction', serviceElementsFactory);
  }
}
