import { createAction, props } from '@ngrx/store';
import { Team } from './teams.model';

export const storeTeamData = createAction('[teams] storeTeamData', props<{ teamData: Team }>());
