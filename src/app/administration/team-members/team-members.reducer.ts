import { createReducer, on, createSelector } from '@ngrx/store';
import {
  defaultLoadable,
  onLoadableInit,
  onLoadableSuccess,
  onLoadableError,
  Loadable,
} from '@app/shared/shared.reducer';
import { createTeamMember, createTeamMemberSuccess, createTeamMemberError } from './team-members.actions';

export const featureKey = 'team-members';

const initialState = {
  createTeamMemberStatus: defaultLoadable() as Loadable,
};

export interface TeamMembersState {
  createTeamMemberStatus: Loadable;
}

const innerReducer = createReducer(
  initialState,
  on(createTeamMember, (state) => ({ ...state, createTeamMemberStatus: onLoadableInit() })),
  on(createTeamMemberSuccess, (state) => ({ ...state, createTeamMemberStatus: onLoadableSuccess() })),
  on(createTeamMemberError, (state, { error }) => ({ ...state, createTeamMemberStatus: onLoadableError(error) }))
);

export default function reducer(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = (state) => state[featureKey] as TeamMembersState;
export const selectCreateTeamMemberStatus = createSelector(
  selectFeature,
  (state) => state && state.createTeamMemberStatus
);
