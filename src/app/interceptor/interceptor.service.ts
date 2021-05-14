import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const id_token = localStorage.getItem('id_token');

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id_token}`,
      },
    });

    return next.handle(request);
  }
}
