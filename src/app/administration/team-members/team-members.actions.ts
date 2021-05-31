import { createAction, props } from '@ngrx/store';
import { TeamMember } from './team-members.model';

const key = '[TeamMembers]';

export const createTeamMember = createAction(`${key} createTeamMember`, props<{ teamMember: TeamMember }>());
export const createTeamMemberSuccess = createAction(`${key} createTeamMemberSuccess`);
export const createTeamMemberError = createAction(`${key} createTeamMemberError`, props<{ error: any }>());

export const resetUpdateTeamMemberStatus = createAction(`${key} resetUpdateTeamMemberStatus`);
export const updateTeamMember = createAction(`${key} updateTeamMember`, props<{ teamMember: TeamMember }>());
export const updateTeamMemberError = createAction(`${key} updateTeamMemberError`, props<{ error: any }>());
export const updateTeamMemberSuccess = createAction(`${key} updateTeamMemberSuccess`);
