import { createAction, props } from '@ngrx/store';
import { User } from '@app/login/login.model';

export const storeUserData = createAction('[users] storeUserData', props<{ userData: User }>());

export const updateUserData = createAction('[users] updateUserData', props<{ userData: User }>());
