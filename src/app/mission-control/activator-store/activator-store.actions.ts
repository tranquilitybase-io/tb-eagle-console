import { createAction, props } from '@ngrx/store';
import { Activator, ActivatorMetadata } from './activator-store.model';

const key = '[ActivatorStore]';

export const getActivators = createAction(`${key} getActivators`);
export const getActivatorsSuccess = createAction(`${key} getActivatorsSuccess`, props<{ activators: Activator[] }>());
export const getActivatorsError = createAction(`${key} getActivatorsError`, props<{ error: any }>());

export const getByCategory = createAction(`${key} getByCategory`, props<{ category: string }>());
export const getByCategorySuccess = createAction(`${key} getByCategorySuccess`, props<{ activators: Activator[] }>());
export const getByCategoryError = createAction(`${key} getByCategoryError`, props<{ error: any }>());

export const storeActivatorData = createAction(
  '[ActivatorStore] storeActivatorData',
  props<{ activatorData: Activator }>()
);

export const setDeprecated = createAction('[ActivatorStore] set-deprecated', props<{ id: number }>());
export const setDeprecatedSuccess = createAction(
  '[ActivatorStore] setDeprecatedSuccess',
  props<{ activatorData: Activator }>()
);
export const setDeprecatedError = createAction('[ActivatorStore] setDeprecatedError', props<{ error: any }>());

export const setLocked = createAction('[ActivatorStore] set-locked', props<{ id: number }>());
export const setLockedSuccess = createAction(
  '[ActivatorStore] setLockedSuccess',
  props<{ activatorData: Activator }>()
);
export const setLockedError = createAction('[ActivatorStore] setLockedError', props<{ error: any }>());

export const denyAccess = createAction(
  '[ActivatorStore] deny-access',
  props<{ activatorId: number; teamId: string }>()
);
export const denyAccessSuccess = createAction(
  '[ActivatorStore] denyAccessSuccess',
  props<{ activatorData: Activator }>()
);
export const denyAccessError = createAction('[ActivatorStore] denyAccessError', props<{ error: any }>());

export const grantAccess = createAction(
  '[ActivatorStore] grant-access',
  props<{ activatorId: number; teamId: string }>()
);
export const grantAccessSuccess = createAction(
  '[ActivatorStore] grantAccessSuccess',
  props<{ activatorData: Activator }>()
);
export const grantAccessError = createAction('[ActivatorStore] grantAccessError', props<{ error: any }>());

export const requestAccess = createAction('[ActivatorStore] request-access', props<{ id: number }>());
export const requestAccessSuccess = createAction(
  '[ActivatorStore] requestAccessSuccess',
  props<{ activatorData: Activator }>()
);
export const requestAccessError = createAction('[ActivatorStore] requestAccessError', props<{ error: any }>());

export const setCategoriesCount = createAction(
  '[ActivatorStore] set-categories-count',
  props<{ categoriesCount: number }>()
);
export const setActivatorsCount = createAction(
  '[ActivatorStore] set-activators-count',
  props<{ activatorsCount: number }>()
);
export const setProgress = createAction('[ActivatorStore] set-progress', props<{ step: number }>());

export const createActivatorByURL = createAction('[ActivatorStore] createActivatorByURL', props<{ url: string }>());
export const createActivatorByURLSuccess = createAction(
  '[ActivatorStore] createActivatorByURLSuccess',
  props<{ activatorData: Activator }>()
);
export const createActivatorByURLError = createAction(
  '[ActivatorStore] createActivatorByURLError',
  props<{ error: any }>()
);

export const updateActivator = createAction('[ActivatorStore] updateActivator', props<{ activatorData: Activator }>());
export const updateActivatorSuccess = createAction(
  '[ActivatorStore] updateActivatorSuccess',
  props<{ activatorData: Activator }>()
);
export const updateActivatorError = createAction('[ActivatorStore] updateActivatorError', props<{ error: any }>());

export const resetActivatorDataStatus = createAction('[ActivatorStore] resetActivatorDataStatus');
export const resetAPICallStatuses = createAction('[ActivatorStore] resetAPICallStatuses');
