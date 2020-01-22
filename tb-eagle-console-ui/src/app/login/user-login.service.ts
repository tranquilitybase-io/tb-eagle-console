import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  public loggedIn: boolean;
  private BASE_URL = 'http://localhost:3000/api';

  constructor(private router: Router, private http: HttpClient) {}

  isUserLoggedIn() {
    return this.loggedIn === true;
  }

  setUserLoggedIn(setLogin: boolean) {
    this.loggedIn = setLogin;
  }

  login(userName, userPassword): Observable<User> {
    const url = `${this.BASE_URL}/login`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = {
      username: userName,
      password: userPassword
    };

    return this.http.post<User>(url, params, { headers });
  }

  setLoggedInState(setLogin: string): void {
    localStorage.setItem('isLoggedIn', setLogin);
  }
}
