import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Solution } from './interfaces';
@Injectable()
export class SolutionsService extends EntityCollectionServiceBase<Solution> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Solution', serviceElementsFactory);
  }
}
