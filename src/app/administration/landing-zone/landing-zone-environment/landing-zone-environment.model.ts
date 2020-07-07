export interface FolderStructureNode {
  id: number;
  isActive: boolean;
  name: string;
  children?: FolderStructureNode[];
}

export class Environment {
  id: number;
  isActive: boolean;
  name: string;
}

export interface LanVPC {
  id?: number;
  isActive: boolean;
  name: string;
  environments: number[] | Environment[];
}
