import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const id_token = localStorage.getItem('id_token');

    request = request.clone({
      setHeaders: {
        Authorization: id_token ? `Bearer ${id_token}` : ''
      }
    });
    return next.handle(request);
  }
}
