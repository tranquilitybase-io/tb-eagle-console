import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WanConfiguration } from '../../../landing-zone-wan.model';
import { LandingZoneWanService } from '../../../landing-zone-wan.service';

@Injectable({ providedIn: 'root' })
export class LandingViewResolver implements Resolve<WanConfiguration> {
  constructor(private landingZoneWanService: LandingZoneWanService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WanConfiguration> {
    return this.landingZoneWanService.getByKey(state.root.queryParamMap.get('id'));
  }
}
