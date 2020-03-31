import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SolutionsService } from '../solutions.service';
import { Observable } from 'rxjs';
import { Solution } from '../solutions.model';

@Injectable({ providedIn: 'root' })
export class ViewResolver implements Resolve<Solution> {
  constructor(private service: SolutionsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Solution> {
    return this.service.getByKey(state.root.queryParamMap.get('id'));
  }
}
