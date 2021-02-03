import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamsService } from './teams.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  createTeamData,
  createTeamDataError,
  createTeamDataSuccess,
  getTeams,
  getTeamsError,
  getTeamsSuccess,
  updateTeamData,
  updateTeamDataError,
  updateTeamDataSuccess
} from './teams.actions';
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
      mergeMap(actions =>
        this.teamsService.getTeams(actions.queryParams).pipe(
          map(teams => getTeamsSuccess({ teams })),
          catchError(error => of(getTeamsError({ error })))
        )
      )
    )
  );

  createTeamData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTeamData),
      mergeMap(action =>
        this.teamsService.add(action.teamData).pipe(
          map(() => {
            this.snackBarService.success('Team has been created');
            return createTeamDataSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Team has not been created');
            return of(createTeamDataError({ error }));
          })
        )
      )
    )
  );

  updateTeamData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTeamData),
      mergeMap(action =>
        this.teamsService.add(action.teamData).pipe(
          map(() => {
            this.snackBarService.success('Team has been updated');
            return updateTeamDataSuccess();
          }),
          catchError(error => {
            this.snackBarService.error('Something went wrong. Team has not been updated');
            return of(updateTeamDataError({ error }));
          })
        )
      )
    )
  );
}
