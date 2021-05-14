import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { QueryParam } from './business-unit-home/business-unit-home-filter/business-unit-home-filter.model';
import { BusinessUnit } from './business-unit.model';

@Injectable({
  providedIn: 'root',
})
export class BusinessUnitService extends EntityCollectionServiceBase<BusinessUnit> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('BusinessUnit', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  getBusinessUnits(queryParams: QueryParam[]): Observable<BusinessUnit[]> {
    const url = `${this.BASE_URL}/businessunits/`;
    let params = new HttpParams();
    for (let obj of queryParams) {
      params = params.append(obj.key, obj.value);
    }
    return this.http.get<BusinessUnit[]>(url, { params });
  }
}
