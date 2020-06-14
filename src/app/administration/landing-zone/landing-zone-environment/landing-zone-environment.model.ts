export interface FolderStructureNode {
  id: number;
  isActive: boolean;
  name: string;
  children?: FolderStructureNode[];
}

export interface LanVPC {
  id?: number;
  name: string;
  environments: string[];
}
