/**
 * Single breadcrumb step.
 */
export interface BreadcrumbStep {
  name: string;
  link?: string;
  id?: string;
  parentUrl: string;
}

export enum BreadcrumbsURLs {
  SOLUTIONS_HOME = 'mission-control/solutions',
  SOLUTIONS_VIEW = 'mission-control/solutions/view',
  SOLUTIONS_CREATE = 'mission-control/solutions/create',
  SOLUTIONS_EDIT = 'mission-control/solutions/edit',
  APPLICATIONS_VIEW = 'mission-control/solutions/view/application',
  APPLICATIONS_CREATE = 'mission-control/solutions',
  ACTIVATOR_STORE = 'mission-control/activator-store',
  ACTIVATOR_STORE_VIEW = 'mission-control/activator-store/view',
  LANDING_ZONE_HOME = 'administration/landing-zone',
  LANDING_ZONE_WAN = 'administration/landing-zone/wan',
  LANDING_ZONE_WAN_CREATE = 'administration/landing-zone/wan/create',
  LANDING_ZONE_WAN_EDIT = 'administration/landing-zone/wan/edit',
  LANDING_ZONE_WAN_VIEW = 'administration/landing-zone/wan/view',
  LANDING_ZONE_ENVIRONMENT = 'administration/landing-zone/environment',
  TEAMS_HOME = 'administration/teams',
  TEAMS_CREATE = 'administration/teams/create',
  TEAMS_EDIT = 'administration/teams/edit',
  TEAMS_VIEW = 'administration/teams/view',
  TEAMS__CREATE_TEAM_MEMBER = 'administration/teams/create-team-member',
  USERS_HOME = 'administration/users',
  USERS_CREATE = 'administration/users/create',
  USERS_EDIT = 'administration/users/edit',
  USERS_VIEW = 'administration/users/view'
}
