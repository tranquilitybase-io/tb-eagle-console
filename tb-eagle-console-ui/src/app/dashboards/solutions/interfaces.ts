import { Activator } from '../activators/interfaces';

export class Application {
  name: string;
  description: string;
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
