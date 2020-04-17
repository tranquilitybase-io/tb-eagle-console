import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SolutionsService } from '@app/mission-control/solutions/solutions.service';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SolutionsViewResolver implements Resolve<Solution> {
  constructor(private solutionsService: SolutionsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Solution> {
    return this.solutionsService.getByKey(state.root.queryParamMap.get('id'));
  }
}
