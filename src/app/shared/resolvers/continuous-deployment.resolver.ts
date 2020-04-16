import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeyValue } from '@angular/common';
import { SolutionsService } from '@app/mission-control/solutions/solutions.service';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Injectable({ providedIn: 'root' })
export class ContinuousDeploymentResolver implements Resolve<KeyValue<string, string>[]> {
  constructor(private sharedService: SharedService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KeyValue<string, string>[]> {
    return this.sharedService.getContinuousDeployment();
  }
}
