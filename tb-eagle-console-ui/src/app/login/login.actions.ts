import { createAction, props } from '@ngrx/store';

//export const login = createAction('[logi-form-pane component] login', props<{username: string, password: string}>());

export const login = createAction('[logi-form-pane component] login');

export const loginSuccess = createAction(
  '[logi-form-pane component] login-success',
  props<{ username: string; password: string }>()
);

export const loginFailure = createAction(
  '[logi-form-pane component] login-failure',
  props<{ username: string; password: string }>()
);
