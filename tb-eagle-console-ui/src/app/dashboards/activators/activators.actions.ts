import { createAction, props } from '@ngrx/store';

export const setProgress = createAction('[Activators] set-progress', props<{ step: number }>());
