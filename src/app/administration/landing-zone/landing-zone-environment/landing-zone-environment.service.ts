import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { setFolderStructureTreeData, setEnvironmentListData } from './landing-zone-environment.actions';
import { EnvironmentState } from './landing-zone-environment.reducer';
import { FolderStructureNode, Environment } from './landing-zone-environment.model';

@Injectable({
  providedIn: 'root'
})
export class LandingZoneEnvironmentService {
  private BASE_URL = `${globalThis.location.origin}/api`;

  constructor(private store: Store<EnvironmentState>, private http: HttpClient) {}

  postEnvironmentListData(environmentListData: Environment[]): void {
    const url = `${this.BASE_URL}/lzmetadataEnv/?readActiveOnly=true&bulkDelete=true`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, environmentListData, { headers }).subscribe(
      (val: Environment[]) => {
        console.log('POST call successful value returned in body', val);
        this.store.dispatch(setEnvironmentListData({ environmentListData: val }));
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
    console.log(environmentListData + ' posted');
  }

  postFolderStructureTreeData(folderStructureTreeData: FolderStructureNode[]): void {
    const url = `${this.BASE_URL}/lzmetadataFolderStructure/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, folderStructureTreeData, { headers }).subscribe(
      (val: FolderStructureNode[]) => {
        console.log('POST call successful value returned in body', val);
        this.store.dispatch(setFolderStructureTreeData({ folderStructureTreeData: val }));
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      }
    );
    console.log(folderStructureTreeData + ' posted');
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

  getEnvironmentListData(): Observable<Environment[]> {
    const url = `${this.BASE_URL}/lzmetadataEnv/?readActiveOnly=true`;
    return this.http.get<Environment[]>(url).pipe(
      tap(environmentListData => this.store.dispatch(setEnvironmentListData({ environmentListData }))),
      catchError(this.handleError)
    );
  }

  getFolderStructureTreeData(): Observable<FolderStructureNode[]> {
    const url = `${this.BASE_URL}/lzmetadataFolderStructure/`;
    return this.http.get<FolderStructureNode[]>(url).pipe(
      tap(folderStructureTreeData => this.store.dispatch(setFolderStructureTreeData({ folderStructureTreeData }))),
      catchError(this.handleError)
    );
  }
}
