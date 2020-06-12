export class BusinessUnit {
  id?: number;
  name: string;
  description: string;
  isActive: boolean;
}

export class Team {
  id?: number;
  name: string;
  description: string;
  isActive: boolean;
  businessUnitId: number;
  businessUnit: BusinessUnit;
  lastUpdated: string;
}

export class Environment {
  id?: number;
  name: string;
  isActive: boolean;
}
