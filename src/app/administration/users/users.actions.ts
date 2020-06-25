import { createAction, props } from '@ngrx/store';
import { User } from '@app/login/login.model';
// import { User } from './users.model';

export const storeUserData = createAction('[users] storeUserData', props<{ userData: User }>());
