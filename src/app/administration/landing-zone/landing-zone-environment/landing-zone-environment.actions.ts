import { createAction, props } from '@ngrx/store';
import { FolderStructureNode } from './landing-zone-environment.model';

export const setFolderStructureTreeData = createAction(
  '[landing-zone-environment] setFolderStructureTreeData',
  props<{ folderStructureTreeData: FolderStructureNode[] }>()
);

export const storeFolderStructureTreeData = createAction(
  '[landing-zone-environment] storeFolderStructureTreeData',
  props<{ folderStructureTreeData: FolderStructureNode[] }>()
);
