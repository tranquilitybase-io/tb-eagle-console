export class Role {
  id: number;
  name: string;
  description: string;
  cloudIdentityGroup: string;
}

export enum DeploymentState {
  Pending = 'PENDING',
  Started = 'STARTED',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Retry = 'RETRY',
  Revoked = 'REVOKED',
  Removed = 'REMOVED',
}

const decimalByte = '([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])';
const decimalNetmask = '([1-9]|[12][0-9]|3[0-2])';

export class ValidatorPattern {
  public static readonly NUMBERS_ONLY = '^[0-9]*$';
  public static readonly NETMASK = `^/${decimalNetmask}$`;
  public static readonly IP_ADDRESS = `^(${decimalByte}\\.){3}${decimalByte}$`;
  public static readonly IP_ADDRESS_NETMASK = `^(${decimalByte}\\.){3}${decimalByte}/${decimalNetmask}$`;
  public static readonly EMAIL = `^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`;
}
