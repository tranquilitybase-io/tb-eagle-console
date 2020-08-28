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

export interface Resource {
  name: string;
  ipAddress: string;
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
  // description: string;
  // platforms: string[];
  // type: string;
  // category: string;
  accessRequestedBy: User;
  activatorMetadata: ActivatorMetadata;
  apiManagement: string[];
  billing: string;
  businessUnit: ActivatorBusinessUnit;
  businessUnitId: number;
  cd: string[] | ActivatorCD[]; //new
  ci: string[] | ActivatorCI[];
  envs: ActivatorEnv[]; //new
  hosting: string[];
  id: number;
  isActive: boolean;
  isFavourite: boolean;
  lastUpdated: string;
  name: string;
  regions: string[];
  resources: Resource[];
  sensitivity: string;
  serverCapacity: number;
  sourceControl: ActivatorSourceControl; //new
  sourceControlId: number; //new
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
