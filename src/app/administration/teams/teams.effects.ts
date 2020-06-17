import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamsService } from './teams.service';
import { tap } from 'rxjs/operators';
import { storeTeamData } from './teams.actions';

@Injectable()
export class TeamsEffects {
  constructor(private actions$: Actions, private teamsService: TeamsService) {}

  storeTeamData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(storeTeamData),
        tap(action => this.teamsService.postTeamData(action.teamData))
      ),
    { dispatch: false }
  );
}
