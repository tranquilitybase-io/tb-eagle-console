import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { Observable } from 'rxjs';
import { UsersService } from '@app/administration/users/users.service';
import { User } from '@app/administration/users/users.model';

@Injectable({ providedIn: 'root' })
export class UserByIdResolver implements Resolve<User> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.usersService.getByKey(state.root.queryParamMap.get('id'));
  }
}
