import {
  createBusinessUnitError,
  createBusinessUnitSuccess,
  updateBusinessUnitError,
  updateBusinessUnitSuccess
} from './business-unit.actions';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BusinessUnit } from './business-unit.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessUnitService extends EntityCollectionServiceBase<BusinessUnit> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('BusinessUnit', serviceElementsFactory);
  }
}
