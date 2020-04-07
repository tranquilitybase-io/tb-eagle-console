import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  constructor(private router: Router, private store: Store<any>) {}

  canActivate() {
    return this.store.pipe(select(selectUserIsAdmin)).pipe(
      map(isAdmin => {
        return isAdmin || this.router.parseUrl('/login');
      })
    );
  }
}
