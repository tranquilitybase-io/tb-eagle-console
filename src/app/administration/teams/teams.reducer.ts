import { Team } from './teams.model';
import { createReducer } from '@ngrx/store';

export const intialState = {
  environmentListData: [],
  folderStructureTreeData: [{}],
  lanVPCListData: []
};

export interface EnvironmentState {
  teamData: Team[];
}
export const featureKey = 'teams';

export const teamsReducer = createReducer(intialState);

export default function reducer(state, action) {
  return teamsReducer(state, action);
}

export const selectFeature = state => state[featureKey];
