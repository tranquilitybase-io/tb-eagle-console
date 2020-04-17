import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeyValue } from '@angular/common';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TeamResolver implements Resolve<KeyValue<string, string>[]> {
  constructor(private sharedService: SharedService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KeyValue<string, string>[]> {
    return this.sharedService.getTeam();
  }
}
