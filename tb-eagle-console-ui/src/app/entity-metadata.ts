import { EntityMetadataMap } from '@ngrx/data';
import { Solution } from './dashboards/solutions/solutions.model';
import { LandingZoneAction } from './administration/landing-zone/landing-zone.model';

const entityMetadata: EntityMetadataMap = {
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
        return solutions.filter(solution => solution.favourite === true);
      }

      if (filter === 'Active') {
        return solutions.filter(solution => solution.active === true);
      }

      if (filter === 'Archived') {
        return solutions.filter(solution => solution.active === false);
      }

      return solutions;
    }
  }
};

export default {
  entityMetadata
};
