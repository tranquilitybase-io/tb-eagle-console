import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class LandingZoneHomeService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('SharedServiceHome', serviceElementsFactory);
  }
}
