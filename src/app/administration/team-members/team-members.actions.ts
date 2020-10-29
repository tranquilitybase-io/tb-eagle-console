import { createAction, props } from '@ngrx/store';
import { TeamMember } from './team-members.model';

const key = '[TeamMembers]';

export const createTeamMember = createAction(`${key} createTeamMember`, props<{ teamMember: TeamMember }>());
export const createTeamMemberSuccess = createAction(`${key} createTeamMemberSuccess`);
export const createTeamMemberError = createAction(`${key} createTeamMemberError`, props<{ error: any }>());
