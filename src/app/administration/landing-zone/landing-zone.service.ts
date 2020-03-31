import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { LandingZoneProgressItem } from './landing-zone.model';

@Injectable({
  providedIn: 'root'
})
export class LandingZoneService extends EntityCollectionServiceBase<LandingZoneProgressItem> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('LandingZoneProgressItem', serviceElementsFactory);
  }
}
