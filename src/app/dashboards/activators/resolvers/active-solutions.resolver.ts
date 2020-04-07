import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SolutionsService } from '@app/dashboards/solutions/solutions.service';
import { Solution } from '@app/dashboards/solutions/solutions.model';

@Injectable({ providedIn: 'root' })
export class ActiveSolutionsResolver implements Resolve<Solution[]> {
  constructor(private service: SolutionsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Solution[]> {
    return this.service.getWithQuery({ active: 'true', namesonly: 'true' });
  }
}
