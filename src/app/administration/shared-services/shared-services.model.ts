export interface SharedServicesAction {
  id: number;
  title: string;
  categoryName: string;
  categoryClass: string;
  completionRate: number;
  locked: boolean;
  routerLink: string;
  dependantOn: number;
  isOptional: boolean;
}

export interface SharedServicesProgressItem {
  id: number;
  label: string;
  completed: boolean;
}
