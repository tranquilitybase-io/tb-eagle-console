import { BusinessUnit } from '../busines-unit/business-unit.model';

export class Team {
  id?: number;
  businessUnit: BusinessUnit;
  businessUnitId: number;
  description: string;
  cloudIdentityGroup: string;
  isFavourite: boolean;
  isActive: boolean;
  lastUpdated: string;
  name: string;
  userCount: number;
}
