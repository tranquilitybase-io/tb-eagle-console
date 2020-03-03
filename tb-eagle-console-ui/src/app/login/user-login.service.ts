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
  private BASE_URL = 'http://localhost:3000/api';

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

  loginSuccess(): void {
    this.router.navigateByUrl('/dashboard/solutions');
  }

  loginFailure(): void {
    this.router.navigateByUrl('/login');
  }
}
