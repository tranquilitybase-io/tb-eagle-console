import { createReducer, createSelector, on } from '@ngrx/store';
import { setFolderStructureTreeData } from './landing-zone-environment.actions';
import { FolderStructureNode } from './landing-zone-environment.model';

export const intialState = {
  folderStructureTreeData: [{}]
};

export interface EnvironmentState {
  folderStructureTreeData: FolderStructureNode[];
}
export const featureKey = 'landing-zone-environment';

export const landingZoneEnvironmentReducer = createReducer(
  intialState,
  on(setFolderStructureTreeData, (state, { folderStructureTreeData }) => ({ ...state, folderStructureTreeData }))
);

export default function reducer(state, action) {
  return landingZoneEnvironmentReducer(state, action);
}

export const selectFeature = state => state[featureKey];

export const selectFolderStructureTreeData = createSelector(selectFeature, state =>
  state ? state.folderStructureTreeData : ([] as FolderStructureNode[])
);
