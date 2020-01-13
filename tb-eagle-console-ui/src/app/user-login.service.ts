import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  public loggedIn:boolean;

  constructor() { }

  isUserLoggedIn() {

    if (this.loggedIn === true) {
      return true;
    } else {
      return false;
    }

  }

  setUserLoggedIn(setLogin: boolean) {

    this.loggedIn = setLogin;

  }
}
