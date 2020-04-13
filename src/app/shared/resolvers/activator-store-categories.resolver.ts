import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';
import { ActivatorCategory } from '@app/mission-control/activator-store/activator-store.model';

@Injectable({ providedIn: 'root' })
export class ActivatorStoreCategoriesResolver implements Resolve<ActivatorCategory[]> {
  constructor(private sharedService: SharedService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ActivatorCategory[]> {
    return this.sharedService.getActivatorCategories();
  }
}
