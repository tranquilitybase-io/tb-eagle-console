import { createAction, props } from '@ngrx/store';
import { FolderStructureNode, Environment } from './landing-zone-environment.model';

export const setFolderStructureTreeData = createAction(
  '[landing-zone-environment] setFolderStructureTreeData',
  props<{ folderStructureTreeData: FolderStructureNode[] }>()
);

export const storeFolderStructureTreeData = createAction(
  '[landing-zone-environment] storeFolderStructureTreeData',
  props<{ folderStructureTreeData: FolderStructureNode[] }>()
);

export const setEnvironmentListData = createAction(
  '[landing-zone-environment] setEnvironmentListData',
  props<{ environmentListData: Environment[] }>()
);

export const storeEnvironmentListData = createAction(
  '[landing-zone-environment] storeEnvironmentListData',
  props<{ environmentListData: Environment[] }>()
);
