import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  public loggedIn: boolean;

  constructor() {}

  isUserLoggedIn() {
    return this.loggedIn === true;
  }

  setUserLoggedIn(setLogin: boolean) {
    this.loggedIn = setLogin;
  }
}
