import { EntityMetadataMap } from '@ngrx/data';
import { Solution } from './dashboards/solutions/solutions.model';

const entityMetadata: EntityMetadataMap = {
  Application: {},
  Deployment: {},
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
