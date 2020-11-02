import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BusinessUnit } from './business-unit.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessUnitService extends EntityCollectionServiceBase<BusinessUnit> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('BusinessUnit', serviceElementsFactory);
  }
}
