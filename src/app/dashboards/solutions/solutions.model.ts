import { Activator } from '../activators/activators.model';

export class Application {
  solutionId: number;
  activatorId: number;
  name: string;
  description: string;
  env: string;
  status: string;
  activator: Activator;
}

export class Solution {
  id: number;
  name: string;
  description: string;
  businessUnit: string;
  costCentre: string;
  ci: string;
  cd: string;
  sourceControl: string;
  environments: string[];
  active: boolean;
  favourite: boolean;
  applications: Array<Application>;
  teams: number;
  lastUpdated: string;
}
