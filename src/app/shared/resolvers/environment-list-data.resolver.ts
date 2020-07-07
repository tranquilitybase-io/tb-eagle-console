import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LandingZoneEnvironmentService } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.service';
import { Environment } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.model';

@Injectable({ providedIn: 'root' })
export class EnvironmentListDataResolver implements Resolve<Environment[]> {
  constructor(private landingZoneEnvironmentService: LandingZoneEnvironmentService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Environment[]> {
    return this.landingZoneEnvironmentService.getEnvironmentListData();
  }
}
