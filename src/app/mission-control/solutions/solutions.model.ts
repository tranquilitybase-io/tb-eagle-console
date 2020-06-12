import { Application } from '../applications/applications.model';
import { Team, Environment } from '@app/shared/shared.model';

export class Solution {
  id?: number;
  name: string;
  description: string;
  businessUnit: string;
  costCentre: string;
  ci: string;
  cd: string;
  sourceControl: string;
  environments: number[] | Environment[];
  isActive: boolean;
  favourite: boolean;
  deploymentStatus: string;
  applications: Application[];
  teamId: number;
  team: Team;
  lastUpdated: string;
}
