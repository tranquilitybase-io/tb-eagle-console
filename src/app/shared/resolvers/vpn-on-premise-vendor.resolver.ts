import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs';

import { LandingZoneWanFormsVpnService } from '@app/administration/landing-zone/landing-zone-wan/landing-zone-wan-forms/landing-zone-wan-forms-vpn/landing-zone-wan-forms-vpn.service';

@Injectable({ providedIn: 'root' })
export class VpnOnPremiseVendorResolver implements Resolve<KeyValue<string, string>[]> {
  constructor(private service: LandingZoneWanFormsVpnService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KeyValue<string, string>[]> {
    return this.service.getVpnOnPremiseVendor();
  }
}
