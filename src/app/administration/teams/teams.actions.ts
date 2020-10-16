import { createAction, props } from '@ngrx/store';
import { Team } from './teams.model';

export const createTeamData = createAction('[teams] createTeamData', props<{ teamData: Team }>());
export const createTeamDataSuccess = createAction('[teams] createTeamDataSuccess');
export const createTeamDataError = createAction('[teams] createTeamDataError', props<{ error: any }>());

export const resetCreateTeamDataStatus = createAction('[teams] resetCreateTeamDataStatus');

export const updateTeamData = createAction('[teams] updateTeamData', props<{ teamData: Team }>());
export const updateTeamDataSuccess = createAction('[teams] updateTeamData');
export const updateTeamDataError = createAction('[teams] updateTeamDataError', props<{ error: any }>());

export const resetUpdateTeamDataStatus = createAction('[teams] resetUpdateTeamDataStatus');
