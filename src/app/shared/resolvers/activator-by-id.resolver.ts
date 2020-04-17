import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Activator } from '@app/mission-control/activator-store/activator-store.model';
import { ActivatorStoreService } from '@app/mission-control/activator-store/activator-store.service';

@Injectable({ providedIn: 'root' })
export class ActivatorByIdResolver implements Resolve<Activator> {
  constructor(private activatorStoreService: ActivatorStoreService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Activator> {
    return this.activatorStoreService.getByKey(state.root.queryParamMap.get('id'));
  }
}
