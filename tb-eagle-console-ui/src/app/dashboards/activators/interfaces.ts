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
}
