import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs';

import { SharedService } from '../shared.service';

@Injectable({ providedIn: 'root' })
export class SubnetModeResolver implements Resolve<KeyValue<string, string>[]> {
  constructor(private service: SharedService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KeyValue<string, string>[]> {
    return this.service.getSubnetMode();
  }
}
