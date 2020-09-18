import { KeyValue } from '@angular/common';
import { User } from '@app/login/login.model';

export interface ActivatorsMetadata {
  count: number;
}

export interface ActivatorMetadata {
  activatorLink: string;
  category: string;
  description: string;
  id: number;
  lastUpdated: string;
  name: string;
  platforms: ActivatorPlatform[];
  type: ActivatorType;
  typeId: number;
  variables: any[];
}

export interface ActivatorPlatform {
  id: number;
  value: string;
}

export interface ActivatorType {
  id: number;
  value: string;
}

export interface ActivatorCategory {
  category: string;
}

export interface ActivatorCI {
  id: number;
  value: string;
}

export interface ActivatorCD {
  id: number;
  value: string;
}

export interface ActivatorEnv {
  id: number;
  isActive: boolean;
  name: string;
}

export interface ActivatorSourceControl {
  id: number;
  value: string;
}

export interface ActivatorBusinessUnit {
  description: string;
  id: number;
  isActive: boolean;
  name: string;
}

export interface Activator {
  accessRequestedBy: User;
  activatorMetadata: ActivatorMetadata;
  apiManagement: string[];
  billing: string;
  businessUnit: ActivatorBusinessUnit;
  businessUnitId: number;
  cd: string[] | ActivatorCD[];
  ci: string[] | ActivatorCI[];
  envs: ActivatorEnv[];
  hosting: string[];
  id: number;
  isActive: boolean;
  isFavourite: boolean;
  lastUpdated: string;
  name: string;
  regions: string[];
  sensitivity: string;
  serverCapacity: number;
  sourceControl: ActivatorSourceControl;
  sourceControlId: number;
  status: string;
  technologyOwner: string;
  technologyOwnerEmail: string;
  userCapacity: number;
}

export interface ActivatorStoreGrantAccessDialogData {
  activatorId: number;
  teamList: KeyValue<string, string>[];
  accessRequestedBy: User;
}
