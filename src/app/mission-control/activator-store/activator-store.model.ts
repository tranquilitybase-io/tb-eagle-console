import { KeyValue } from '@angular/common';
import { User } from '@app/login/login.model';

export interface ActivatorsMetadata {
  count: number;
}

export interface ActivatorCategory {
  category: string;
}

export interface Resource {
  name: string;
  ipAddress: string;
}

export interface Activator {
  id: number;
  name: string;
  type: string;
  status: string;
  accessRequestedBy: User;
  sensitivity: string;
  category: string;
  envs: string[];
  platforms: string[];
  lastUpdated: string;
  isFavourite: boolean;
  isActive: boolean;
  description: string;
  userCapacity: number;
  serverCapacity: number;
  regions: string[];
  ci: string[];
  cd: string[];
  hosting: string[];
  apiManagement: string[];
  sourceControl: string[];
  businessUnity: string;
  technologyOwner: string;
  technologyOwnerEmail: string;
  billing: string;
  resources: Resource[];
}

export interface ActivatorStoreGrantAccessDialogData {
  activatorId: number;
  teamList: KeyValue<string, string>[];
  accessRequestedBy: User;
}
