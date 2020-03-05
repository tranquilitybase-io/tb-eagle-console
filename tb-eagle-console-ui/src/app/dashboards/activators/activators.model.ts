import { KeyValue } from '@angular/common';
import { User } from '@app/login/login.model';

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
  update: Date;
  description: string;
  userCapacity: number;
  serverCapacity: number;
  regions: string[];
  ci: string[];
  cd: string[];
  hosting: string[];
  apiManagement: string[];
  sourceControl: string[];
}

export interface Deployment {
  id: number;
  application: string;
  env: string;
  status: boolean;
  notes: string;
}

export interface ActivatorGrantAccessDialogData {
  activatorId: number;
  teamList: KeyValue<string, string>[];
  accessRequestedBy: User;
}
