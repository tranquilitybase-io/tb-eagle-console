import { onLoadableInit, onLoadableSuccess, onLoadableError } from '../../shared/shared.reducer';
import {
  getSettings,
  getSettingsError,
  getSettingsSuccess,
  createSettings,
  createSettingsError,
  createSettingsSuccess,
  updateSettings,
  updateSettingsError,
  updateSettingsSuccess,
  deleteSettings,
  deleteSettingsError,
  deleteSettingsSuccess,
  resetApiStatuses
} from './settings.actions';
import { defaultLoadable, Loadable } from '@app/shared/shared.reducer';
import { createReducer, on, createSelector } from '@ngrx/store';
import { Settings } from './settings.model';

export const initialState = {
  settings: {} as Settings,
  getSettingsStatus: defaultLoadable() as Loadable,
  createSettingsStatus: defaultLoadable() as Loadable,
  updateSettingsStatus: defaultLoadable() as Loadable,
  deleteSettingsStatus: defaultLoadable() as Loadable
};

export interface SettingsState {
  settings: Settings;
  getSettingsStatus: Loadable;
  createSettingsStatus: Loadable;
  updateSettingsStatus: Loadable;
  deleteSettingsStatus: Loadable;
}
export const featureKey = 'settings';

export const usersReducer = createReducer(
  initialState,
  // get
  on(getSettings, state => ({ ...state, getSettingsStatus: onLoadableInit() })),
  on(getSettingsError, (state, { error }) => ({ ...state, getSettingsStatus: onLoadableError(error) })),
  on(getSettingsSuccess, (state, { settings }) => ({ ...state, settings, getSettingsStatus: onLoadableSuccess() })),
  // create
  on(createSettings, state => ({ ...state, createSettingsStatus: onLoadableInit() })),
  on(createSettingsError, (state, { error }) => ({ ...state, createSettingsStatus: onLoadableError(error) })),
  on(createSettingsSuccess, (state, { settings }) => ({
    ...state,
    settings,
    createSettingsStatus: onLoadableSuccess()
  })),
  // update
  on(updateSettings, state => ({ ...state, updateSettingsStatus: onLoadableInit() })),
  on(updateSettingsError, (state, { error }) => ({ ...state, updateSettingsStatus: onLoadableError(error) })),
  on(updateSettingsSuccess, (state, { settings }) => ({
    ...state,
    settings,
    updateSettingsStatus: onLoadableSuccess()
  })),
  //delete
  on(deleteSettings, state => ({
    ...state,
    settings: { token: '', username: '' } as Settings,
    deleteSettingsStatus: onLoadableInit()
  })),
  on(deleteSettingsError, (state, { error }) => ({ ...state, deleteSettingsStatus: onLoadableError(error) })),
  on(deleteSettingsSuccess, state => ({ ...state, deleteSettingsStatus: onLoadableSuccess() })),
  //reset
  on(resetApiStatuses, state => ({
    ...state,
    getSettingsStatus: defaultLoadable(),
    createSettingsStatus: defaultLoadable(),
    updateSettingsStatus: defaultLoadable(),
    deleteSettingsStatus: defaultLoadable()
  }))
);

export default function reducer(state, action) {
  return usersReducer(state, action);
}

export const selectFeature = state => state[featureKey] as SettingsState;

export const selectSettings = createSelector(selectFeature, state => state && state.settings);
export const selectGetSettingsStatus = createSelector(selectFeature, state => state && state.getSettingsStatus);
export const selectCreateSettingsStatus = createSelector(selectFeature, state => state && state.createSettingsStatus);
export const selectUpdateSettingsStatus = createSelector(selectFeature, state => state && state.updateSettingsStatus);
export const selectDeleteSettingsStatus = createSelector(selectFeature, state => state && state.deleteSettingsStatus);
