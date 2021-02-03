import { createAction, props } from '@ngrx/store';
import { QueryParam } from './teams-home/teams-home-filter/teams-home-filter.model';

import { Team } from './teams.model';

const key = '[teams]';

export const getTeams = createAction(`${key} getTeams`, props<{ queryParams: QueryParam[] }>());
export const getTeamsError = createAction(`${key} getTeamsError`, props<{ error: any }>());
export const getTeamsSuccess = createAction(`${key} getTeamsSuccess`, props<{ teams: Team[] }>());

export const createTeamData = createAction(`${key} createTeamData`, props<{ teamData: Team }>());
export const createTeamDataError = createAction(`${key} createTeamDataError`, props<{ error: any }>());
export const createTeamDataSuccess = createAction(`${key} createTeamDataSuccess`);
export const resetCreateTeamStatus = createAction(`${key} resetCreateTeamStatus`);

export const resetUpdateTeamStatus = createAction(`${key} resetUpdateTeamStatus`);
export const updateTeamData = createAction(`${key} updateTeamData`, props<{ teamData: Team }>());
export const updateTeamDataError = createAction(`${key} updateTeamDataError`, props<{ error: any }>());
export const updateTeamDataSuccess = createAction(`${key} updateTeamDataSuccess`);
