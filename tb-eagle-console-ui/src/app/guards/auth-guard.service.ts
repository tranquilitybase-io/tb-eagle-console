import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectIsAuthenticated } from '@app/login/login.reducer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private store: Store<any>) {}

  canActivate() {
    return this.store.pipe(select(selectIsAuthenticated)).pipe(
      map(isAuthenticated => {
        return isAuthenticated || this.router.parseUrl('/login');
      })
    );
  }
}
