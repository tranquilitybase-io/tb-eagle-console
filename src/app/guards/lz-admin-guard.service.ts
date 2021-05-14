import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectUserIsLZAdmin } from '@app/login/login.reducer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LZAdminGuardService implements CanActivate {
  constructor(private router: Router, private store: Store<any>) {}

  canActivate() {
    return this.store.pipe(select(selectUserIsLZAdmin)).pipe(
      map((isAdmin) => {
        if (!isAdmin) {
          if (globalThis.gapi && globalThis.gapi.auth2) {
            globalThis.gapi.auth2.getAuthInstance().signOut();
            localStorage.clear();
          }
        }
        return isAdmin || this.router.parseUrl('/login');
      })
    );
  }
}
