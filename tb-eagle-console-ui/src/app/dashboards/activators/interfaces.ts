export interface Application {
  id: number;
  name: string;
  type: string;
  available: boolean;
  sensitivity: string;
  category: string;
  envs: string[];
  platforms: string[];
  update: Date;
  desc: string;
  userCapacity: number;
  serverCapacity: number;
  regions: string[];
  ci: string[];
  cd: string[];
  hosting: string[];
  apiManagement: string[];
  sourceControl: string[];
}

export interface Deployment {
  id: number;
  application: string;
  env: string;
  status: boolean;
  notes: string;
}
