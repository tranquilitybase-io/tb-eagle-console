import { createReducer, createSelector, on } from '@ngrx/store';
import {
  createApplication,
  createApplicationError,
  createApplicationStatusReset,
  createApplicationSuccess,
  setApplicationDeploymentsData,
  startDeployment,
  startDeploymentError,
  startDeploymentSuccess
} from './applications.actions';
import { ApplicationDeployment } from './applications.model';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess
} from '@app/shared/shared.reducer';

export const featureKey = 'application';

export interface ApplicationState {
  applicationDeploymentsData: ApplicationDeployment[];
}
const initialState = {
  applicationDeploymentsData: [],
  createApplicationStatus: defaultLoadable() as Loadable,
  startDeploymentStatus: defaultLoadable() as Loadable
};

const innerReducer = createReducer(
  initialState,
  on(createApplication, state => ({ ...state, createApplicationStatus: onLoadableInit() })),
  on(createApplicationError, (state, { error }) => ({ ...state, createApplicationStatus: onLoadableError(error) })),
  on(createApplicationStatusReset, state => ({ ...state, createApplicationStatus: defaultLoadable() })),
  on(createApplicationSuccess, state => ({ ...state, createApplicationStatus: onLoadableSuccess() })),
  on(startDeployment, state => ({ ...state, startDeploymentStatus: onLoadableInit() })),
  on(startDeploymentError, (state, { error }) => ({ ...state, startDeploymentStatus: onLoadableError(error) })),
  on(startDeploymentSuccess, state => ({ ...state, startDeploymentStatus: onLoadableSuccess() })),
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

export const selectCreateApplicationStatus = createSelector(
  selectFeature,
  state => state && state.createApplicationStatus
);
export const selectStartDeploymentStatus = createSelector(selectFeature, state => state && state.startDeploymentStatus);
