import { EntityMetadataMap } from '@ngrx/data';
import { LandingZoneAction } from './administration/landing-zone/landing-zone.model';
import { Solution } from './mission-control/solutions/solutions.model';
import { Team } from './administration/teams/teams.model';

const entityMetadata: EntityMetadataMap = {
  LandingZoneWan: {},
  LandingZoneProgressItem: {},
  LandingZoneAction: {
    filterFn: (actions: LandingZoneAction[], filter: string) => {
      if (filter === 'Completed') {
        return actions.filter(action => action.completionRate === 100);
      }

      if (filter === 'InProgress') {
        return actions.filter(action => action.completionRate !== 100 && !action.locked);
      }

      if (filter === 'Locked') {
        return actions.filter(action => action.locked);
      }

      return actions;
    }
  },
  Activator: {},
  Application: {},
  Solution: {
    filterFn: (solutions: Solution[], filter: string) => {
      if (filter === 'Favourites') {
        return solutions.filter(solution => solution.isFavourite);
      }

      if (filter === 'Active') {
        return solutions.filter(solution => solution.isActive);
      }

      if (filter === 'Archived') {
        return solutions.filter(solution => !solution.isActive);
      }

      return solutions;
    }
  },
  Team: {
    filterFn: (teams: Team[], filter: string) => {
      if (filter === 'Favourites') {
        return teams.filter(team => team.isFavourite);
      }

      if (filter === 'Actives') {
        return teams.filter(team => team.isActive);
      }

      if (filter === 'Archived') {
        return teams.filter(team => !team.isActive);
      }

      return teams;
    }
  },
  User: {}
};

export default {
  entityMetadata
};
