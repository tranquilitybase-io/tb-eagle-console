import { getBusinessUnitListSuccess, getBussinessUnitListError } from './business-unit.actions';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@app/login/login.model';
import { BusinessUnit } from './business-unit.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessUnitService extends EntityCollectionServiceBase<BusinessUnit> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Business unit', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  private getBusinessUnitListSuccess(businessUnitList: BusinessUnit[]) {
    this.store.dispatch(getBusinessUnitListSuccess({ businessUnitList }));
  }

  private getBussinessUnitListError(error: any) {
    this.store.dispatch(getBussinessUnitListError({ error: 'error' }));
  }

  getBusinessUnitList(): void {
    const url = `${this.BASE_URL}/businessunits`;
    this.http.get(url).subscribe(this.getBusinessUnitListSuccess, this.getBussinessUnitListError);
  }
}
