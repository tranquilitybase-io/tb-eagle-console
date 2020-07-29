import { createAction, props } from '@ngrx/store';
import { TeamMember } from './team-members.model';

export const createTeamMember = createAction('[TeamMembers] create', props<{ teamMember: TeamMember }>());
