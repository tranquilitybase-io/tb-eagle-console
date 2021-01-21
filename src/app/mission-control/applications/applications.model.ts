import { Activator } from '../activator-store/activator-store.model';
import { DeploymentState } from '@app/shared/shared.model';

export interface Resource {
  name: string;
  ipAddress: string;
}

export class Application {
  id: number;
  solutionId: number;
  activatorId: number;
  name: string;
  description: string;
  env: string;
  status: string;
  lastUpdated: string;
  isFavourite: boolean;
  isActive: boolean;
  activator: Activator;
  deploymentState: DeploymentState;
  resources: Resource[];
}

export class ApplicationDeployment {
  id?: number;
  deploymentState: DeploymentState;
}

export class ApplicationSettings {
  application_id?: number;
  name: string;
  type: string;
  value: string;
}
