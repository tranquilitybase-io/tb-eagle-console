import {
  createTeamData,
  createTeamDataError,
  createTeamDataSuccess,
  resetCreateTeamDataStatus,
  resetUpdateTeamDataStatus,
  updateTeamData,
  updateTeamDataError,
  updateTeamDataSuccess
} from './teams.actions';
import { createReducer, on, createSelector } from '@ngrx/store';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';

export const initialState = {
  createTeamDataStatus: defaultLoadable() as Loadable,
  updateTeamDataStatus: defaultLoadable() as Loadable
};

export interface TeamsState {
  createTeamDataStatus: Loadable;
  updateTeamDataStatus: Loadable;
}

export const featureKey = 'teams';

export const teamsReducer = createReducer(
  initialState,
  on(createTeamData, state => ({ ...state, createTeamDataStatus: onLoadableInit() })),
  on(createTeamDataSuccess, state => ({ ...state, createTeamDataStatus: onLoadableSuccess() })),
  on(createTeamDataError, (state, { error }) => ({ ...state, createTeamDataStatus: onLoadableError(error) })),
  on(resetCreateTeamDataStatus, state => ({ ...state, createTeamDataStatus: defaultLoadable() })),
  on(updateTeamData, state => ({ ...state, updateTeamDataStatus: onLoadableInit() })),
  on(updateTeamDataSuccess, state => ({ ...state, updateTeamDataStatus: onLoadableSuccess() })),
  on(updateTeamDataError, (state, { error }) => ({ ...state, updateTeamDataStatus: onLoadableError(error) })),
  on(resetUpdateTeamDataStatus, state => ({ ...state, updateTeamDataStatus: defaultLoadable() }))
);

export default function reducer(state, action) {
  return teamsReducer(state, action);
}

export const selectFeature = state => state[featureKey];
export const selectCreateTeamDataStatus = createSelector(selectFeature, state => state && state.createTeamDataStatus);
export const selectUpdateTeamDataStatus = createSelector(selectFeature, state => state && state.updateTeamDataStatus);
