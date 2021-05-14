import { createAction, props } from '@ngrx/store';
import { Settings } from './settings.model';

const key = '[settings]';

export const getSettings = createAction(`${key} getSettings`);
export const getSettingsError = createAction(`${key} getSettingsError`, props<{ error: any }>());
export const getSettingsSuccess = createAction(`${key} getSettingsSuccess`, props<{ settings: Settings }>());

export const createSettings = createAction(`${key} createSettings`, props<{ settings: Settings }>());
export const createSettingsError = createAction(`${key} createSettingsError`, props<{ error: any }>());
export const createSettingsSuccess = createAction(`${key} createSettingsSuccess`, props<{ settings: Settings }>());

export const updateSettings = createAction(`${key} updateSettings`, props<{ settings: Settings }>());
export const updateSettingsError = createAction(`${key} updateSettingsError`, props<{ error: any }>());
export const updateSettingsSuccess = createAction(`${key} updateSettingsSuccess`, props<{ settings: Settings }>());

export const deleteSettings = createAction(`${key} deleteSettings`);
export const deleteSettingsError = createAction(`${key} deleteSettingsError`, props<{ error: any }>());
export const deleteSettingsSuccess = createAction(`${key} deleteSettingsSuccess`);

export const resetApiStatuses = createAction(`${key} resetApiStatuses`);
