import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SitesService } from './sites.service';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { getSites, getSitesError, getSitesSuccess } from './sites.actions';

@Injectable()
export class SitesEffects {
  constructor(private actions$: Actions, private sitesService: SitesService) {}

  geSites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSites),
      mergeMap((action) =>
        this.sitesService.getSites().pipe(
          map((sites) => getSitesSuccess({ sites })),
          catchError((error) => of(getSitesError({ error })))
        )
      )
    )
  );
}
