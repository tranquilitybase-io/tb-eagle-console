import { createReducer, on, createSelector } from '@ngrx/store';
import {
  defaultLoadable,
  onLoadableInit,
  onLoadableSuccess,
  onLoadableError,
  Loadable,
} from '@app/shared/shared.reducer';
import {
  createTeamMember,
  createTeamMemberSuccess,
  createTeamMemberError,
  resetUpdateTeamMemberStatus,
  updateTeamMember,
  updateTeamMemberError,
  updateTeamMemberSuccess,
} from './team-members.actions';

export const featureKey = 'team-members';

const initialState = {
  createTeamMemberStatus: defaultLoadable() as Loadable,
  updateTeamMemberStatus: defaultLoadable() as Loadable,
};

export interface TeamMembersState {
  createTeamMemberStatus: Loadable;
  updateTeamMemberStatus: Loadable;
}

const innerReducer = createReducer(
  initialState,
  // create
  on(createTeamMember, (state) => ({ ...state, createTeamMemberStatus: onLoadableInit() })),
  on(createTeamMemberSuccess, (state) => ({ ...state, createTeamMemberStatus: onLoadableSuccess() })),
  on(createTeamMemberError, (state, { error }) => ({ ...state, createTeamMemberStatus: onLoadableError(error) })),
  // update
  on(resetUpdateTeamMemberStatus, (state) => ({ ...state, updateTeamMemberStatus: defaultLoadable() })),
  on(updateTeamMember, (state) => ({ ...state, updateTeamMemberStatus: onLoadableInit() })),
  on(updateTeamMemberError, (state, { error }) => ({ ...state, updateTeamMemberStatus: onLoadableError(error) })),
  on(updateTeamMemberSuccess, (state) => ({ ...state, updateTeamMemberStatus: onLoadableSuccess() }))
);

export default function reducer(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = (state) => state[featureKey] as TeamMembersState;
export const selectCreateTeamMemberStatus = createSelector(
  selectFeature,
  (state) => state && state.createTeamMemberStatus
);
export const selectUpdateTeamMemberStatus = createSelector(
  selectFeature,
  (state) => state && state.updateTeamMemberStatus
);
