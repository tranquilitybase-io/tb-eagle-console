import { Activator } from '../activator-store/activator-store.model';
import { DeploymentState } from '@app/shared/shared.model';

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
}
