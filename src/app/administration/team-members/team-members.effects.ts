import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { TeamMembersService } from './team-members.service';
import { createTeamMember } from './team-members.actions';

@Injectable()
export class TeamMembersEffects {
  constructor(private actions$: Actions, private service: TeamMembersService) {}

  createTeamMember$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createTeamMember),
        tap(action => {
          this.service.createTeamMember(action.teamMember);
        })
      ),
    { dispatch: false }
  );
}
