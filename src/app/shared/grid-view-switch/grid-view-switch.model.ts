export enum GridViewSwitchViewsNames {
  solutions = 'solutions',
  activatorStore = 'activatorStore',
  teams = 'teams',
  users = 'users',
  landingZone = 'landingZone'
}

export enum GridViewSwitchOptionsEnum {
  grid = 'grid',
  row = 'row'
}

export interface GridViewSwitchModel {
  viewName: GridViewSwitchViewsNames;
  option: GridViewSwitchOptionsEnum;
}
