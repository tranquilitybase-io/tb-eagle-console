import {
  defaultLoadable,
  onLoadableInit,
  onLoadableSuccess,
  onLoadableError,
  Loadable
} from '@app/shared/shared.reducer';
import { createReducer, createSelector, on } from '@ngrx/store';

import {
  lzEnvironmentDeployment,
  lzEnvironmentDeploymentError,
  lzEnvironmentDeploymentSuccess,
  resetEnvironmentStatuses,
  setEnvironmentListData,
  setFolderStructureTreeData,
  setLanVPCListData,
  storeEnvironmentListData,
  storeEnvironmentListDataError,
  storeEnvironmentListDataSuccess,
  storeFolderStructureTreeData,
  storeFolderStructureTreeDataError,
  storeFolderStructureTreeDataSuccess,
  storeLanVPCListData,
  storeLanVpcListDataError,
  storeLanVpcListDataSuccess
} from './landing-zone-environment.actions';
import { FolderStructureNode, Environment, LanVPC } from './landing-zone-environment.model';

export const intialState = {
  environmentListData: [],
  storeEnvironmentListDataStatus: defaultLoadable() as Loadable,
  folderStructureTreeData: [{}],
  storeFolderStructureTreeDataStatus: defaultLoadable() as Loadable,
  lanVPCListData: [],
  storeLanVPCListDataStatus: defaultLoadable() as Loadable,
  lzEnvironmentDeploymentStatus: defaultLoadable() as Loadable
};

export interface EnvironmentState {
  environmentListData: Environment[];
  storeEnvironmentListDataStatus: Loadable;
  folderStructureTreeData: FolderStructureNode[];
  storeFolderStructureTreeDataStatus: Loadable;
  lanVPCListData: LanVPC[];
  storeLanVPCListDataStatus: Loadable;
  lzEnvironmentDeploymentStatus: Loadable;
}
export const featureKey = 'landing-zone-environment';

export const landingZoneEnvironmentReducer = createReducer(
  intialState,
  on(setEnvironmentListData, (state, { environmentListData }) => ({ ...state, environmentListData })),
  on(storeEnvironmentListData, state => ({ ...state, storeEnvironmentListDataStatus: onLoadableInit() })),
  on(storeEnvironmentListDataError, (state, { error }) => ({
    ...state,
    storeEnvironmentListDataStatus: onLoadableError(error)
  })),
  on(storeEnvironmentListDataSuccess, (state, { environmentListData }) => ({
    ...state,
    environmentListData,
    storeEnvironmentListDataStatus: onLoadableSuccess()
  })),
  on(setFolderStructureTreeData, (state, { folderStructureTreeData }) => ({ ...state, folderStructureTreeData })),
  on(storeFolderStructureTreeData, state => ({ ...state, storeFolderStructureTreeDataStatus: onLoadableInit() })),
  on(storeFolderStructureTreeDataError, (state, { error }) => ({
    ...state,
    storeFolderStructureTreeDataStatus: onLoadableError(error)
  })),
  on(storeFolderStructureTreeDataSuccess, (state, { folderStructureTreeData }) => ({
    ...state,
    folderStructureTreeData,
    storeFolderStructureTreeDataStatus: onLoadableSuccess()
  })),
  on(setLanVPCListData, (state, { lanVPCListData }) => ({ ...state, lanVPCListData })),
  on(storeLanVPCListData, state => ({ ...state, storeLanVPCListDataStatus: onLoadableInit() })),
  on(storeLanVpcListDataError, (state, { error }) => ({
    ...state,
    storeLanVPCListDataStatus: onLoadableError(error)
  })),
  on(storeLanVpcListDataSuccess, (state, { lanVPCListData }) => ({
    ...state,
    lanVPCListData,
    storeLanVPCListDataStatus: onLoadableSuccess()
  })),
  on(lzEnvironmentDeployment, state => ({ ...state, lzEnvironmentDeploymentStatus: onLoadableInit() })),
  on(lzEnvironmentDeploymentError, (state, { error }) => ({
    ...state,
    lzEnvironmentDeploymentStatus: onLoadableError(error)
  })),
  on(lzEnvironmentDeploymentSuccess, state => ({ ...state, lzEnvironmentDeploymentStatus: onLoadableSuccess() })),
  on(resetEnvironmentStatuses, state => ({
    ...state,
    storeEnvironmentListDataStatus: defaultLoadable(),
    storeFolderStructureTreeDataStatus: defaultLoadable(),
    storeLanVPCListDataStatus: defaultLoadable(),
    lzEnvironmentDeploymentStatus: defaultLoadable()
  }))
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
export const selectLanVPCListData = createSelector(selectFeature, state =>
  state ? state.lanVPCListData : ([] as LanVPC[])
);
export const selectLzEnvironmentDeploymentStatus = createSelector(
  selectFeature,
  state => state && state.lzEnvironmentDeploymentStatus
);
export const selectStoreEnvironmentListDataStatus = createSelector(
  selectFeature,
  state => state && state.storeEnvironmentListDataStatus
);
export const selectStoreFolderStructureTreeDataStatus = createSelector(
  selectFeature,
  state => state && state.storeFolderStructureTreeDataStatus
);
export const selectStoreLanVPCListDataStatus = createSelector(
  selectFeature,
  state => state && state.storeLanVPCListDataStatus
);
