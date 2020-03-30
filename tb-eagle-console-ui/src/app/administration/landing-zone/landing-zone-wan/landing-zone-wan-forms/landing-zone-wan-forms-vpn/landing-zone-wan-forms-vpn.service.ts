import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { KeyValue } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingZoneWanFormsVpnService {
  constructor(private http: HttpClient) {}

  private BASE_URL = `${globalThis.location.origin}/api`;

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

  getSubnetMode(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/subnetMode`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getBgpRoutingMode(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/bgpRoutingMode`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }

  getVpnOnPremiseVendor(): Observable<KeyValue<string, string>[]> {
    const url = `${this.BASE_URL}/keyValues/vpnOnPremiseVendor`;
    return this.http.get<KeyValue<string, string>[]>(url).pipe(catchError(this.handleError));
  }
}
