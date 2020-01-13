export interface Application {
  name: string;
  type: string;
  available: boolean;
  sensitivity: string;
  category: string;
  envs: string[];
  platforms: string[];
  update: Date;
  description: string;
  userCapacity: number;
  serverCapacity: number;
  regions: string[];
  ci: string[];
  cd: string[];
  hosting: string[];
  apiManagement: string[];
  sourceControl: string[];
}
