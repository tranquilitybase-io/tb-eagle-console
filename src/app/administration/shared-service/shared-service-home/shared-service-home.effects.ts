import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {} from './shared-service-home.actions';
import { LandingZoneHomeService } from './shared-service-home.service';

@Injectable()
export class LandingZoneHomeEffects {
  constructor(private actions$: Actions, private service: LandingZoneHomeService) {}
}
