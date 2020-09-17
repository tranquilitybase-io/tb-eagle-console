export enum GridViewSwitchViewsNames {
  solutions = 'solutions',
  solutionsView = 'soutionsView',
  activatorStore = 'activatorStore',
  teams = 'teams',
  users = 'users',
  landingZone = 'landingZone',
  applicationDeployments = 'applicationDeployments',
  teamMembers = 'teamMembers'
}

export enum GridViewSwitchOptionsEnum {
  grid = 'grid',
  row = 'row'
}

export interface GridViewSwitchModel {
  viewName: GridViewSwitchViewsNames;
  option: GridViewSwitchOptionsEnum;
}
