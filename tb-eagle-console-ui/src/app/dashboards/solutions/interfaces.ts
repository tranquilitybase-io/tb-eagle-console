import { Application } from '../activators/interfaces';

export class Solution {
  id: number;
  name: string;
  desc: string;
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
