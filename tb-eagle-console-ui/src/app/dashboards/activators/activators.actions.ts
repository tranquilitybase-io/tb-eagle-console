import { createAction, props } from '@ngrx/store';

export const setProgress = createAction('[Activators] set-progress', props<{ step: number }>());
export const setDeprecated = createAction('[Activators] set-deprecated', props<{ id: number }>());
export const setLocked = createAction('[Activators] set-locked', props<{ id: number }>());
