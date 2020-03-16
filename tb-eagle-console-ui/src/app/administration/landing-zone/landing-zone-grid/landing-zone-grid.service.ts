import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { LandingZoneAction } from '../landing-zone.model';

@Injectable({
  providedIn: 'root'
})
export class LandingZoneGridService extends EntityCollectionServiceBase<LandingZoneAction> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('LandingZoneAction', serviceElementsFactory);
  }
}
