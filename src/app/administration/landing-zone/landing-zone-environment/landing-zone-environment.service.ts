import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  setEnvironmentListData,
  setFolderStructureTreeData,
  setLanVPCListData,
} from './landing-zone-environment.actions';
import { EnvironmentState } from './landing-zone-environment.reducer';
import { FolderStructureNode, Environment, LanVPC } from './landing-zone-environment.model';

@Injectable({
  providedIn: 'root',
})
export class LandingZoneEnvironmentService {
  private BASE_URL = `${globalThis.location.origin}/api`;

  constructor(private store: Store<EnvironmentState>, private http: HttpClient) {}

  postEnvironmentListData(environmentListData: Environment[]): Observable<Environment[]> {
    const url = `${this.BASE_URL}/lzmetadataEnv/?readActiveOnly=true&bulkDelete=true`;
    return this.http.post(url, environmentListData) as Observable<Environment[]>;
  }

  postFolderStructureTreeData(folderStructureTreeData: FolderStructureNode[]): Observable<FolderStructureNode[]> {
    const url = `${this.BASE_URL}/lzmetadataFolderStructure/`;
    return this.http.post(url, folderStructureTreeData) as Observable<FolderStructureNode[]>;
  }

  postLanVPCListData(lanVPCListData: LanVPC[]): Observable<LanVPC[]> {
    const url = `${this.BASE_URL}/lzmetadataLanVpc/?readActiveOnly=true&bulkDelete=true`;
    return this.http.post(url, lanVPCListData) as Observable<LanVPC[]>;
  }

  lzEnvironmentDeployment(): Observable<any> {
    const url = `${this.BASE_URL}/lzEnvironmentDeployment/`;
    return this.http.post(url, null) as Observable<any>;
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
      tap((environmentListData) => this.store.dispatch(setEnvironmentListData({ environmentListData }))),
      catchError(this.handleError)
    );
  }

  getFolderStructureTreeData(): Observable<FolderStructureNode[]> {
    const url = `${this.BASE_URL}/lzmetadataFolderStructure/`;
    return this.http.get<FolderStructureNode[]>(url).pipe(
      tap((folderStructureTreeData) => this.store.dispatch(setFolderStructureTreeData({ folderStructureTreeData }))),
      catchError(this.handleError)
    );
  }

  getLanVPCListData(): Observable<LanVPC[]> {
    const url = `${this.BASE_URL}/lzmetadataLanVpc/?readActiveOnly=true`;
    return this.http.get<LanVPC[]>(url).pipe(
      tap((lanVPCListData) => this.store.dispatch(setLanVPCListData({ lanVPCListData }))),
      catchError(this.handleError)
    );
  }
}
