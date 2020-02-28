import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatorsService } from '../activators.service';
import { Activator } from '../activators.model';

@Injectable({ providedIn: 'root' })
export class ActivatorByIdResolver implements Resolve<Activator> {
  constructor(private service: ActivatorsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Activator> {
    return this.service.getByKey(state.root.queryParamMap.get('id'));
  }
}
