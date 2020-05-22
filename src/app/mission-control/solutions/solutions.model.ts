import { Application } from '../applications/applications.model';

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
  deploymentStatus: string;
  applications: Array<Application>;
  teams: number;
  lastUpdated: string;
}
