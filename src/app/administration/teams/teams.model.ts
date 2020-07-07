import { BusinessUnit } from '@app/shared/shared.model';

export class Team {
  id?: number;
  businessUnit: BusinessUnit;
  businessUnitId: number;
  description: string;
  isFavourite: boolean;
  isActive: boolean;
  lastUpdated: string;
  name: string;
  userCount: number;
}
