import { createReducer, createSelector, on } from '@ngrx/store';
import { setFolderStructureTreeData, setEnvironmentListData } from './landing-zone-environment.actions';
import { FolderStructureNode, Environment } from './landing-zone-environment.model';

export const intialState = {
  environmentListData: [],
  folderStructureTreeData: [{}]
};

export interface EnvironmentState {
  environmentListData: Environment[];
  folderStructureTreeData: FolderStructureNode[];
}
export const featureKey = 'landing-zone-environment';

export const landingZoneEnvironmentReducer = createReducer(
  intialState,
  on(setEnvironmentListData, (state, { environmentListData }) => ({ ...state, environmentListData })),
  on(setFolderStructureTreeData, (state, { folderStructureTreeData }) => ({ ...state, folderStructureTreeData }))
);

export default function reducer(state, action) {
  return landingZoneEnvironmentReducer(state, action);
}

export const selectFeature = state => state[featureKey];

export const selectEnvironmentListData = createSelector(selectFeature, state =>
  state ? state.environmentListData : ([] as Environment[])
);
export const selectFolderStructureTreeData = createSelector(selectFeature, state =>
  state ? state.folderStructureTreeData : ([] as FolderStructureNode[])
);
