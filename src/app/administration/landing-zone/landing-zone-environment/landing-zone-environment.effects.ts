import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { LandingZoneEnvironmentService } from './landing-zone-environment.service';
import { storeFolderStructureTreeData } from './landing-zone-environment.actions';

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
}
