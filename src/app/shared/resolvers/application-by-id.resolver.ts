import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DeploymentsService } from '@app/mission-control/activator-store/activator-store-view/deployments.service';
import { Application } from '@app/mission-control/solutions/solutions.model';

@Injectable({ providedIn: 'root' })
export class ApplicationByIdResolver implements Resolve<Application> {
  constructor(private deploymentsService: DeploymentsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Application> {
    return this.deploymentsService.getByKey(state.root.queryParamMap.get('id'));
  }
}
