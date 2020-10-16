import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamsService } from './teams.service';
import { tap } from 'rxjs/operators';
import { createTeamData, updateTeamData } from './teams.actions';

@Injectable()
export class TeamsEffects {
  constructor(private actions$: Actions, private teamsService: TeamsService) {}

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
