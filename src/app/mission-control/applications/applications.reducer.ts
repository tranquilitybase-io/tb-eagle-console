import { createReducer, createSelector, on } from '@ngrx/store';
import { setApplicationDeploymentsData } from './applications.actions';
import { ApplicationDeployment } from './applications.model';

export const featureKey = 'application';

export interface ApplicationState {
  applicationDeploymentsData: ApplicationDeployment[];
}
const initialState = {
  applicationDeploymentsData: []
};

const innerReducer = createReducer(
  initialState,
  on(setApplicationDeploymentsData, (state, { applicationDeploymentsData }) => {
    if (JSON.stringify(applicationDeploymentsData) !== JSON.stringify(state.applicationDeploymentsData)) {
      return { ...state, applicationDeploymentsData };
    }
    return state;
  })
);

export default function reducer(state, action) {
  return innerReducer(state, action);
}

export const selectFeature = state => state[featureKey];

export const selectApplicationDeploymentsData = createSelector(
  selectFeature,
  state => state && state.applicationDeploymentsData
);
