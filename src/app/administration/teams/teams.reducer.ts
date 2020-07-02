import { Team } from './teams.model';
import { createReducer, on } from '@ngrx/store';
import { updateTeamData } from './teams.actions';

export const initialState = {
  environmentListData: [],
  folderStructureTreeData: [{}],
  lanVPCListData: []
};

export interface EnvironmentState {
  teamData: Team[];
}
export const featureKey = 'teams';

export const teamsReducer = createReducer(
  initialState,
  on(updateTeamData, (state, { teamData }) => ({ ...state, selectedTeam: teamData }))
);

export default function reducer(state, action) {
  return teamsReducer(state, action);
}

export const selectFeature = state => state[featureKey];
