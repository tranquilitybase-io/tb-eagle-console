import { BusinessUnit } from '@app/shared/shared.model';

export class Team {
  id?: number;
  name: string;
  description: string;
  isFavourite: boolean;
  isActive: boolean;
  lastUpdated: string;
  userCount: number;
  businessUnitId: number;
  businessUnit: BusinessUnit;
}
