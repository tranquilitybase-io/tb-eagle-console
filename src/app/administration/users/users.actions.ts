import { createAction, props } from '@ngrx/store';
import { QueryParam } from './users-home/users-home-filter/users-home-filter.model';
import { User } from './users.model';

const key = '[users]';

export const getUsers = createAction(`${key} getUsers`, props<{ queryParams: QueryParam[] }>());
export const getUsersSuccess = createAction(`${key} getUsersSuccess`, props<{ users: User[] }>());
export const getUsersError = createAction(`${key} getUsersError`, props<{ error: any }>());

export const createUserData = createAction('[users] createUserData', props<{ userData: User }>());
export const createUserDataSuccess = createAction('[users] createUserDataSuccess');
export const createUserDataError = createAction('[users] createUserDataError', props<{ error: any }>());

export const resetCreateUserDataStatus = createAction('[users] resetCreateUserDataStatus');

export const updateUserData = createAction('[users] updateUserData', props<{ userData: User }>());
export const updateUserDataSuccess = createAction('[users] updateUserDataSuccess');
export const updateUserDataError = createAction('[users] updateUserDataError', props<{ error: any }>());

export const resetUpdateDataStatus = createAction('[users] resetUpdateDataStatus');
