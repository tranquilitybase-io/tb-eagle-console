import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamMembersService } from './team-members.service';
import {
  createTeamMember,
  createTeamMemberSuccess,
  createTeamMemberError,
  updateTeamMember,
  updateTeamMemberSuccess,
  updateTeamMemberError,
} from './team-members.actions';
import { ApiCallStatusSnackbarService } from '@app/shared/snack-bar/api-call-status/api-call-status.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class TeamMembersEffects {
  constructor(
    private actions$: Actions,
    private service: TeamMembersService,
    private snackBarService: ApiCallStatusSnackbarService
  ) {}

  createTeamMember$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTeamMember),
      mergeMap((action) =>
        this.service.createTeamMember(action.teamMember).pipe(
          map(() => {
            this.snackBarService.success('Team member has been created');
            return createTeamMemberSuccess();
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong, Team member has not been created');
            return of(createTeamMemberError({ error }));
          })
        )
      )
    )
  );

  updateTeamData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTeamMember),
      mergeMap((action) =>
        this.service.updateTeamMember(action.teamMember).pipe(
          map(() => {
            this.snackBarService.success('Team member has been updated');
            return updateTeamMemberSuccess();
          }),
          catchError((error) => {
            this.snackBarService.error('Something went wrong. Team member has not been updated');
            return of(updateTeamMemberError({ error }));
          })
        )
      )
    )
  );
}
