import { createAction, props } from '@ngrx/store';

export const login = createAction('[logi-form-pane component] login', props<{ username: string; password: string }>());

export const getUser = createAction('[logi-form-pane component] get-user');

export const loginSuccess = createAction('[logi-form-pane component] login-success');

export const loginFailure = createAction('[logi-form-pane component] login-failure');
