import { createReducer, on, createSelector } from '@ngrx/store';
import { getSites, getSitesError, getSitesSuccess } from './sites.actions';
import { Site } from './sites.model';
import {
  defaultLoadable,
  Loadable,
  onLoadableError,
  onLoadableInit,
  onLoadableSuccess,
} from '@app/shared/shared.reducer';

export const initialState = {
  sites: [] as Site[],
  getSitesStatus: defaultLoadable() as Loadable,
  createSiteDataStatus: defaultLoadable() as Loadable,
  updateSiteDataStatus: defaultLoadable() as Loadable,
};

export interface SitesState {
  createSiteDataStatus: Loadable;
  getSitesStatus: Loadable;
  updateSiteDataStatus: Loadable;
  sites: Site;
}
export const featureKey = 'sites';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getSites, (state) => ({ ...state, getSitesStatus: onLoadableInit() })),
  on(getSitesError, (state, { error }) => ({ ...state, getSitesStatus: onLoadableError(error) })),
  on(getSitesSuccess, (state, { sites }) => ({ ...state, getSitesStatus: onLoadableSuccess(), sites }))
  /*
    on(getSites, state => ({ ...state, getSitesStatus: onLoadableInit() })),
    on(getSitesError, (state, { error }) => ({ ...state, getSitesStatus: onLoadableError(error) })),
    on(getSitesSuccess, (state, { users }) => ({ ...state, getSitesStatus: onLoadableSuccess(), users })),
    // create
    on(createSiteData, state => ({ ...state, createSiteDataStatus: onLoadableInit() })),
    on(createSiteDataSuccess, state => ({ ...state, createSiteDataStatus: onLoadableSuccess() })),
    on(createSiteDataError, (state, { error }) => ({ ...state, createSiteDataStatus: onLoadableError(error) })),
    on(resetCreateSiteDataStatus, state => ({ ...state, createSiteDataStatus: defaultLoadable() })),
    // update
    on(updateSiteData, state => ({ ...state, updateSiteDataStatus: onLoadableInit() })),
    on(updateSiteDataSuccess, state => ({ ...state, updateSiteDataStatus: onLoadableSuccess() })),
    on(updateSiteDataError, (state, { error }) => ({ ...state, updateSiteDataStatus: onLoadableError(error) })),
    on(resetUpdateDataStatus, state => ({ ...state, updateSiteDataStatus: defaultLoadable() }))
    */
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = (state) => state[featureKey];

//export const selectCreateSiteDataStatus = createSelector(selectFeature, state => state && state.createSiteDataStatus);
export const selectGetSitesStatus = createSelector(selectFeature, (state) => state && state.getSitesStatus);
//export const selectUpdateSiteDataStatus = createSelector(selectFeature, state => state && state.updateSiteDataStatus);
export const selectSites = createSelector(selectFeature, (state) => state && state.sites);
