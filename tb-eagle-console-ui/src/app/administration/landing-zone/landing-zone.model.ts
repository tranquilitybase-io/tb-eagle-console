export interface LandingZoneAction {
  id: number;
  title: string;
  categoryName: string;
  categoryClass: string;
  completionRate: number;
  locked: boolean;
  routerLink: string;
}

export interface LandingZoneProgressItem {
  id: number;
  label: string;
  completed: boolean;
}
