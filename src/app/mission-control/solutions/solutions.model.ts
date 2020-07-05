import { Application } from '../applications/applications.model';
import { Team } from '@app/administration/teams/teams.model';
import { BusinessUnit, DeploymentState } from '@app/shared/shared.model';
import { Environment } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.model';

class idValuePair {
  id: number;
  value: string;
}

export class Solution {
  id?: number;
  name: string;
  description: string;
  businessUnitId: number;
  businessUnit: BusinessUnit;
  costCentre: string;
  ciId: number;
  ci: idValuePair;
  cdId: number;
  cd: idValuePair;
  sourceControlId: number;
  sourceControl: idValuePair;
  environments: number[] | Environment[];
  isActive: boolean;
  isFavourite: boolean;
  deploymentState: DeploymentState;
  applications: Application[];
  teamId: number;
  team: Team;
  lastUpdated: string;
}
