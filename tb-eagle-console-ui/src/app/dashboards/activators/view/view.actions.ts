import { createAction, props } from '@ngrx/store';

export const changePage = createAction('[Activators] Change Page', props<{ page: number }>());
export const setLength = createAction('[Activators] Set Length', props<{ length: number }>());
