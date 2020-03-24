import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeyValue } from '@angular/common';
import { LandingZoneWanFormsVpnService } from '../landing-zone-wan-forms-vpn.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BgpRoutingModeResolver implements Resolve<KeyValue<string, string>[]> {
  constructor(private service: LandingZoneWanFormsVpnService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KeyValue<string, string>[]> {
    return this.service.getBgpRoutingMode();
  }
}
