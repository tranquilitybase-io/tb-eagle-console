import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserLoginService } from './login/user-login.service';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private uls: UserLoginService, private router: Router) {}

  canActivate() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
