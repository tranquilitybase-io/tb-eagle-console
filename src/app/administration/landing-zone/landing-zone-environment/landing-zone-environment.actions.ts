import { createAction, props } from '@ngrx/store';
import { FolderStructureNode, Environment, LanVPC } from './landing-zone-environment.model';

export const setEnvironmentListData = createAction(
  '[landing-zone-environment] setEnvironmentListData',
  props<{ environmentListData: Environment[] }>()
);

export const storeEnvironmentListData = createAction(
  '[landing-zone-environment] storeEnvironmentListData',
  props<{ environmentListData: Environment[] }>()
);
export const storeEnvironmentListDataSuccess = createAction(
  '[landing-zone-environment] storeEnvironmentListDataSuccess',
  props<{ environmentListData: Environment[] }>()
);
export const storeEnvironmentListDataError = createAction(
  '[landing-zone-environment] storeEnvironmentListDataError',
  props<{ error: any }>()
);

export const setFolderStructureTreeData = createAction(
  '[landing-zone-environment] setFolderStructureTreeData',
  props<{ folderStructureTreeData: FolderStructureNode[] }>()
);

export const storeFolderStructureTreeData = createAction(
  '[landing-zone-environment] storeFolderStructureTreeData',
  props<{ folderStructureTreeData: FolderStructureNode[] }>()
);
export const storeFolderStructureTreeDataSuccess = createAction(
  '[landing-zone-environment] storeFolderStructureTreeDataSuccess',
  props<{ folderStructureTreeData: FolderStructureNode[] }>()
);
export const storeFolderStructureTreeDataError = createAction(
  '[landing-zone-environment] storeFolderStructureTreeDataError',
  props<{ error: any }>()
);

export const setLanVPCListData = createAction(
  '[landing-zone-environment] setLanVPCListData',
  props<{ lanVPCListData: LanVPC[] }>()
);

export const storeLanVPCListData = createAction(
  '[landing-zone-environment] storeLanVPCListData',
  props<{ lanVPCListData: LanVPC[] }>()
);
export const storeLanVpcListDataSuccess = createAction(
  '[landinz-zone-environment] storeLanVpcListDataSuccess',
  props<{ lanVPCListData: LanVPC[] }>()
);
export const storeLanVpcListDataError = createAction(
  '[landinz-zone-environment] storeLanVpcListDataError',
  props<{ error: any }>()
);

export const lzEnvironmentDeployment = createAction('[landing-zone-environment] lzEnvironmentDeployment');
export const lzEnvironmentDeploymentSuccess = createAction('[landing-zone-environment] lzEnvironmentDeploymentSuccess');
export const lzEnvironmentDeploymentError = createAction(
  '[landing-zone-environment] lzEnvironmentDeploymentError',
  props<{ error: any }>()
);

export const resetEnvironmentStatuses = createAction('[landing-zone-environment] resetEnvironmentStatus');
