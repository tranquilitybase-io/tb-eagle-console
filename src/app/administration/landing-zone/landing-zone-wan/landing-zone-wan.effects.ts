import { map, tap, switchMap, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { LandingZoneWanService } from './landing-zone-wan.service';
import range from '@app/shared/utils/range';
import { createWanConfiguration } from './landing-zone-wan.actions';
import { WanConfiguration } from './landing-zone-wan.model';

@Injectable()
export class LandingZoneWanEffects {
  constructor(private actions$: Actions, private langingZoneWanService: LandingZoneWanService) {}

  createWanConfiguration$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createWanConfiguration),
        tap(action => this.langingZoneWanService.createWanConfiguration(action.wanConfiguration))
      ),
    { dispatch: false }
  );
}
