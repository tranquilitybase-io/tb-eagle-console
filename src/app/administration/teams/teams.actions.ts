import { createAction, props } from '@ngrx/store';
import { Team } from './teams.model';

const key = '[teams]';

export const getTeams = createAction(`${key} getTeams`);
export const getTeamsSuccess = createAction(`${key} getTeamsSuccess`, props<{ teams: Team[] }>());
export const getTeamsError = createAction(`${key} getTeamsError`, props<{ error: any }>());

export const createTeamData = createAction(`${key} createTeamData`, props<{ teamData: Team }>());
export const createTeamDataSuccess = createAction(`${key} createTeamDataSuccess`);
export const createTeamDataError = createAction(`${key} createTeamDataError`, props<{ error: any }>());

export const resetCreateTeamDataStatus = createAction(`${key} resetCreateTeamDataStatus`);

export const updateTeamData = createAction(`${key} updateTeamData`, props<{ teamData: Team }>());
export const updateTeamDataSuccess = createAction(`${key} updateTeamData`);
export const updateTeamDataError = createAction(`${key} updateTeamDataError`, props<{ error: any }>());

export const resetUpdateTeamDataStatus = createAction(`${key} resetUpdateTeamDataStatus`);
