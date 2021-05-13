import {
  createTeamData,
  createTeamDataError,
  createTeamDataSuccess,
  getTeams,
  getTeamsError,
  getTeamsSuccess,
  resetCreateTeamStatus,
  resetUpdateTeamStatus,
  updateTeamData,
  updateTeamDataError,
  updateTeamDataSuccess,
} from './teams.actions';
import { createReducer, on, createSelector } from '@ngrx/store';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess,
} from '@app/shared/shared.reducer';
import { Team } from './teams.model';

export const initialState = {
  teams: [] as Team[],
  getTeamsStatus: defaultLoadable() as Loadable,
  createTeamDataStatus: defaultLoadable() as Loadable,
  updateTeamDataStatus: defaultLoadable() as Loadable,
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
  on(getTeams, (state) => ({ ...state, getTeamsStatus: onLoadableInit() })),
  on(getTeamsError, (state, { error }) => ({ ...state, getTeamsStatus: onLoadableError(error) })),
  on(getTeamsSuccess, (state, { teams }) => ({ ...state, teams, getTeamsStatus: onLoadableSuccess() })),
  // create
  on(createTeamData, (state) => ({ ...state, createTeamDataStatus: onLoadableInit() })),
  on(createTeamDataError, (state, { error }) => ({ ...state, createTeamDataStatus: onLoadableError(error) })),
  on(createTeamDataSuccess, (state) => ({ ...state, createTeamDataStatus: onLoadableSuccess() })),
  on(resetCreateTeamStatus, (state) => ({ ...state, createTeamDataStatus: defaultLoadable() })),
  // update
  on(resetUpdateTeamStatus, (state) => ({ ...state, updateTeamDataStatus: defaultLoadable() })),
  on(updateTeamData, (state) => ({ ...state, updateTeamDataStatus: onLoadableInit() })),
  on(updateTeamDataError, (state, { error }) => ({ ...state, updateTeamDataStatus: onLoadableError(error) })),
  on(updateTeamDataSuccess, (state) => ({ ...state, updateTeamDataStatus: onLoadableSuccess() }))
);

export default function reducer(state, action) {
  return teamsReducer(state, action);
}

export const selectFeature = (state) => state[featureKey] as TeamsState;
export const selectCreateTeamDataStatus = createSelector(selectFeature, (state) => state && state.createTeamDataStatus);
export const selectGetTeamsStatus = createSelector(selectFeature, (state) => state && state.getTeamsStatus);
export const selectTeams = createSelector(selectFeature, (state) => state && state.teams);
export const selectUpdateTeamDataStatus = createSelector(selectFeature, (state) => state && state.updateTeamDataStatus);
