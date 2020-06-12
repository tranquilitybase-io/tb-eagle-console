import { createAction, props } from '@ngrx/store';
import { User } from './login.model';

export const login = createAction('[login-form-pane component] login', props<{ username: string; password: string }>());

export const loginSuccess = createAction('[login-form-pane component] login-success', props<{ user: User }>());

export const loginFailure = createAction('[login-form-pane component] login-failure');

export const updateShowWelcome = createAction(
  '[login-form-pane component] login-update-show-welcome',
  props<{ userId: number; showWelcome: boolean }>()
);
