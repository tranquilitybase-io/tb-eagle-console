import {
  getBusinessUnitListSuccess,
  getBussinessUnitListError,
  createBusinessUnitSuccess,
  createBusinessUnitError,
  updateBusinessUnitSuccess,
  updateBusinessUnitError
} from './business-unit.actions';
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
    super('BusinessUnit', serviceElementsFactory);
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

  private createBusinessUnitSuccess = (val: BusinessUnit) => {
    this.dispatch(createBusinessUnitSuccess());
  };

  private createBusinessUnitError = (error: any) => {
    this.dispatch(createBusinessUnitError({ error }));
  };

  createBusinessUnit(businessUnit: BusinessUnit): void {
    const url = `${this.BASE_URL}/businessunit/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post(url, businessUnit, { headers })
      .subscribe(this.createBusinessUnitSuccess, this.createBusinessUnitError, () => {
        this.getAll();
      });
  }

  private updateBusinessUnitSuccess = (val: BusinessUnit) => {
    this.store.dispatch(updateBusinessUnitSuccess());
  };

  private updateBusinessUnitError = (error: any) => {
    this.store.dispatch(updateBusinessUnitError({ error }));
  };

  updateBusinessUnit(businessUnit: BusinessUnit): void {
    const url = `${this.BASE_URL}/businessunit/${businessUnit.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .put(url, businessUnit, { headers })
      .subscribe(this.updateBusinessUnitSuccess, this.updateBusinessUnitError, () => this.getAll());
  }
}
