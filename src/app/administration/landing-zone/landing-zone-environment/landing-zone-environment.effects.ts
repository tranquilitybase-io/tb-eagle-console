import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LandingZoneEnvironmentService } from './landing-zone-environment.service';
import {
  lzEnvironmentDeployment,
  lzEnvironmentDeploymentError,
  lzEnvironmentDeploymentSuccess,
  storeEnvironmentListData,
  storeEnvironmentListDataError,
  storeEnvironmentListDataSuccess,
  storeFolderStructureTreeData,
  storeFolderStructureTreeDataError,
  storeFolderStructureTreeDataSuccess,
  storeLanVPCListData,
  storeLanVpcListDataError,
  storeLanVpcListDataSuccess,
} from './landing-zone-environment.actions';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';
import { of } from 'rxjs';

@Injectable()
export class LandingZoneEnvironmentEffects {
  constructor(
    private actions$: Actions,
    private landingZoneEnvironmentService: LandingZoneEnvironmentService,
    private snackBarService: ApiCallStatusSnackbarService
  ) {}

  storeFolderStructureTreeData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(storeFolderStructureTreeData),
      mergeMap((action) =>
        this.landingZoneEnvironmentService.postFolderStructureTreeData(action.folderStructureTreeData).pipe(
          map((folderStructureTreeData) => {
            this.snackBarService.success('Folder structure has been saved');
            return storeFolderStructureTreeDataSuccess({ folderStructureTreeData });
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. Folder structure has not been saved');
            return of(storeFolderStructureTreeDataError({ error }));
          })
        )
      )
    )
  );

  storeEnvironmentListData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(storeEnvironmentListData),
      mergeMap((action) =>
        this.landingZoneEnvironmentService.postEnvironmentListData(action.environmentListData).pipe(
          map((environmentListData) => {
            this.snackBarService.success('Environments has been saved');
            return storeEnvironmentListDataSuccess({ environmentListData });
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. Environments has not been saved');
            return of(storeEnvironmentListDataError({ error }));
          })
        )
      )
    )
  );

  storeLanVPCListData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(storeLanVPCListData),
      mergeMap((action) =>
        this.landingZoneEnvironmentService.postLanVPCListData(action.lanVPCListData).pipe(
          map((lanVPCListData) => {
            this.snackBarService.success('LAN VPC list had been updated');
            return storeLanVpcListDataSuccess({ lanVPCListData });
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. LAN VPC list had been updated');
            return of(storeLanVpcListDataError({ error }));
          })
        )
      )
    )
  );

  lzEnvironmentDeployment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(lzEnvironmentDeployment),
      mergeMap(() =>
        this.landingZoneEnvironmentService.lzEnvironmentDeployment().pipe(
          map(() => {
            this.snackBarService.success('Environment has been deployed');
            return lzEnvironmentDeploymentSuccess();
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong.Environment has not been deployed');
            return of(lzEnvironmentDeploymentError({ error }));
          })
        )
      )
    )
  );
}
