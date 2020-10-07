import { createAction, props } from '@ngrx/store';
import { User } from '@app/login/login.model';

export const createUserData = createAction('[users] createUserData', props<{ userData: User }>());
export const createUserDataSuccess = createAction('[users] createUserDataSuccess');
export const createUserDataError = createAction('[users] createUserDataError', props<{ error: any }>());

export const resetCreateUserDataStatus = createAction('[users] resetCreateUserDataStatus');

export const updateUserData = createAction('[users] updateUserData', props<{ userData: User }>());
export const updateUserDataSuccess = createAction('[users] updateUserDataSuccess');
export const updateUserDataError = createAction('[users] updateUserDataError', props<{ error: any }>());

export const resetUpdateDataStatus = createAction('[users] resetUpdateDataStatus');
