import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { SolutionsService } from '@app/mission-control/solutions/solutions.service';

@Injectable({ providedIn: 'root' })
export class ActiveSolutionsResolver implements Resolve<Solution[]> {
  constructor(private solutionsService: SolutionsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Solution[]> {
    return this.solutionsService.getWithQuery({ active: 'true', namesonly: 'true' });
  }
}
