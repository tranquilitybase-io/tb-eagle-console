import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  isAuthenticated = false;
  private BASE_URL = `${globalThis.location.origin}/api`;

  constructor(private router: Router, private http: HttpClient) {}

  setUserIsAuthenticated(setLogin: boolean) {
    this.isAuthenticated = setLogin;
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

  loginSuccess(user: User): void {
    if (user.isAdmin) this.router.navigateByUrl('/administration/landing-zone');
    else if (!user.teams.length) this.router.navigateByUrl('/administration/teams');
    else this.router.navigateByUrl('/mission-control/solutions');
  }

  loginFailure(): void {
    this.router.navigateByUrl('/login');
  }

  updateShowWelcome(userId: number, showWelcome: boolean): void {
    const url = `${this.BASE_URL}/user/${userId}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, { showWelcome }, { headers }).subscribe(
      (val: boolean) => {
        console.log('PUT call successful value returned in body', val);
      },
      response => {
        console.log('PUT call in error', response);
      },
      () => {
        console.log('The PUT observable is now completed.');
      }
    );
    console.log(showWelcome + ' put');
  }
}
