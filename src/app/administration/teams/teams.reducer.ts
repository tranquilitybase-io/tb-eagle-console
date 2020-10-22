import {
  getTeams,
  getTeamsSuccess,
  getTeamsError,
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
import { Team } from './teams.model';

export const initialState = {
  teams: [] as Team[],
  getTeamsStatus: defaultLoadable() as Loadable,
  createTeamDataStatus: defaultLoadable() as Loadable,
  updateTeamDataStatus: defaultLoadable() as Loadable
};

export interface TeamsState {
  teams: Team[];
  getTeamsStatus: Loadable;
  createTeamDataStatus: Loadable;
  updateTeamDataStatus: Loadable;
}

export const featureKey = 'teams';

export const teamsReducer = createReducer(
  initialState,
  //getAll
  on(getTeams, state => ({ ...state, getTeamsStatus: onLoadableInit() })),
  on(getTeamsSuccess, (state, { teams }) => ({ ...state, teams, getTeamsStatus: onLoadableSuccess() })),
  on(getTeamsError, (state, { error }) => ({ ...state, getTeamsStatus: onLoadableError(error) })),
  // create
  on(createTeamData, state => ({ ...state, createTeamDataStatus: onLoadableInit() })),
  on(createTeamDataSuccess, state => ({ ...state, createTeamDataStatus: onLoadableSuccess() })),
  on(createTeamDataError, (state, { error }) => ({ ...state, createTeamDataStatus: onLoadableError(error) })),
  on(resetCreateTeamDataStatus, state => ({ ...state, createTeamDataStatus: defaultLoadable() })),
  // update
  on(updateTeamData, state => ({ ...state, updateTeamDataStatus: onLoadableInit() })),
  on(updateTeamDataSuccess, state => ({ ...state, updateTeamDataStatus: onLoadableSuccess() })),
  on(updateTeamDataError, (state, { error }) => ({ ...state, updateTeamDataStatus: onLoadableError(error) })),
  on(resetUpdateTeamDataStatus, state => ({ ...state, updateTeamDataStatus: defaultLoadable() }))
);

export default function reducer(state, action) {
  return teamsReducer(state, action);
}

export const selectFeature = state => state[featureKey] as TeamsState;
export const selectTeams = createSelector(selectFeature, state => state && state.teams);
export const selectGetTeamsStatus = createSelector(selectFeature, state => state && state.getTeamsStatus);
export const selectCreateTeamDataStatus = createSelector(selectFeature, state => state && state.createTeamDataStatus);
export const selectUpdateTeamDataStatus = createSelector(selectFeature, state => state && state.updateTeamDataStatus);
