import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationData, NotificationMetaData } from './notifications.model';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError, Subscription, interval } from 'rxjs';
import { setNotificationData, setNotificationMetaData } from './notifications.actions';
import { Store } from '@ngrx/store';
import { NotificationState } from './notifications.reducer';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notificationUpdate: Subscription;
  constructor(private router: Router, private http: HttpClient, private store: Store<NotificationState>) {
    this.notificationUpdate = interval(8000).subscribe(() => {
      this.getNotificationData().subscribe();
      this.getNotificationMetaData().subscribe();
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private BASE_URL = `${globalThis.location.origin}/api`;
  getNotificationData(): Observable<NotificationData[]> {
    const url = `${this.BASE_URL}/notifications/`;

    return this.http.get<NotificationData[]>(url).pipe(
      tap(notification => this.store.dispatch(setNotificationData({ notification }))),
      catchError(this.handleError)
    );
  }

  getNotificationMetaData(): Observable<NotificationMetaData[]> {
    const url = `${this.BASE_URL}/notificationsMeta/`;

    return this.http.get<NotificationMetaData[]>(url).pipe(
      tap(notificationCount => this.store.dispatch(setNotificationMetaData({ notificationCount }))),
      catchError(this.handleError)
    );
  }
}
