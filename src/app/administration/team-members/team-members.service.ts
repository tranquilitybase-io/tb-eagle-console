import { Injectable } from '@angular/core';
import { TeamMember } from './team-members.model';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
  providedIn: 'root',
})
export class TeamMembersService extends EntityCollectionServiceBase<TeamMember> {
  private BASE_URL = `${globalThis.location.origin}/api`;

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('TeamMember', serviceElementsFactory);
  }

  createTeamMember(teamMember: TeamMember): Observable<TeamMember> {
    const url = `${this.BASE_URL}/teamMember/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, teamMember, { headers }) as Observable<TeamMember>;
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

  getByKey(id): Observable<TeamMember> {
    const url = `${this.BASE_URL}/teamMember/${id}`;
    return this.http.get<TeamMember>(url).pipe(catchError(this.handleError));
  }

  getByTeamId(teamId): Observable<TeamMember[]> {
    const url = `${this.BASE_URL}/teamMembers/?teamId=${teamId}`;
    return this.http.get<TeamMember[]>(url).pipe(catchError(this.handleError));
  }
}
