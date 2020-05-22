import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationsService } from '@app/mission-control/applications/applications.service';
import { Application } from '@app/mission-control/applications/applications.model';

@Injectable({ providedIn: 'root' })
export class ApplicationsByActivatorIdResolver implements Resolve<Application[]> {
  constructor(private applicationsService: ApplicationsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Application[]> {
    return this.applicationsService.getWithQuery({ activatorId: state.root.queryParamMap.get('id') });
  }
}
