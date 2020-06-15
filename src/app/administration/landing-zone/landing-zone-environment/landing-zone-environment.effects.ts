import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { LandingZoneEnvironmentService } from './landing-zone-environment.service';
import {
  storeFolderStructureTreeData,
  storeEnvironmentListData,
  storeLanVPCListData,
  lzEnvironmentDeployment
} from './landing-zone-environment.actions';

@Injectable()
export class LandingZoneEnvironmentEffects {
  constructor(private actions$: Actions, private landingZoneEnvironmentService: LandingZoneEnvironmentService) {}

  storeFolderStructureTreeData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(storeFolderStructureTreeData),
        tap(action => this.landingZoneEnvironmentService.postFolderStructureTreeData(action.folderStructureTreeData))
      ),
    { dispatch: false }
  );

  storeEnvironmentListData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(storeEnvironmentListData),
        tap(action => this.landingZoneEnvironmentService.postEnvironmentListData(action.environmentListData))
      ),
    { dispatch: false }
  );

  storeLanVPCListData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(storeLanVPCListData),
        tap(action => this.landingZoneEnvironmentService.postLanVPCListData(action.lanVPCListData))
      ),
    { dispatch: false }
  );

  lzEnvironmentDeployment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(lzEnvironmentDeployment),
        tap(action => this.landingZoneEnvironmentService.lzEnvironmentDeployment())
      ),
    { dispatch: false }
  );
}
