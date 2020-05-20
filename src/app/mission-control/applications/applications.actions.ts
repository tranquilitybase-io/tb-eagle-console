import { createAction, props } from '@ngrx/store';
import { Application } from './applications.model';

export const createApplication = createAction(
  '[Applications] create-application',
  props<{ application: Application }>()
);
