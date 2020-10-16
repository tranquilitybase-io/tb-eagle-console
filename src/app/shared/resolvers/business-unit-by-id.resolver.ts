import { BusinessUnitService } from './../../administration/busines-unit/business-unit.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { BusinessUnit } from '@app/administration/busines-unit/business-unit.model';

@Injectable({ providedIn: 'root' })
export class BusinessUnitByIdResolver implements Resolve<BusinessUnit> {
  constructor(private businessUnitService: BusinessUnitService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BusinessUnit> {
    return this.businessUnitService.getByKey(state.root.queryParamMap.get('id'));
  }
}
