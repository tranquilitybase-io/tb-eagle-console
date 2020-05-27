import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { WanConfiguration } from '@app/administration/landing-zone/landing-zone-wan/landing-zone-wan.model';
import { LandingZoneWanService } from '@app/administration/landing-zone/landing-zone-wan/landing-zone-wan.service';

@Injectable({ providedIn: 'root' })
export class LandingZoneWanVpnByIdResolver implements Resolve<WanConfiguration> {
  constructor(private landingZoneWanService: LandingZoneWanService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WanConfiguration> {
    return this.landingZoneWanService.getByKey(state.root.queryParamMap.get('id'));
  }
}
