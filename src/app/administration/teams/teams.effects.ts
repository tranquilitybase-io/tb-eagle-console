import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamsService } from './teams.service';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { createTeamData, updateTeamData, getTeams, getTeamsSuccess, getTeamsError } from './teams.actions';
import { of } from 'rxjs';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';

@Injectable()
export class TeamsEffects {
  constructor(
    private actions$: Actions,
    private teamsService: TeamsService,
    private snackBarService: ApiCallStatusSnackbarService
  ) {}

  getTeams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTeams),
      mergeMap(() =>
        this.teamsService.getAll().pipe(
          map(teams => getTeamsSuccess({ teams })),
          catchError(error => of(getTeamsError({ error })))
        )
      )
    )
  );

  createTeamData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createTeamData),
        tap(action => this.teamsService.postTeamData(action.teamData))
      ),
    { dispatch: false }
  );

  updateTeamData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateTeamData),
        tap(action => this.teamsService.updateTeamData(action.teamData))
      ),
    { dispatch: false }
  );
}
