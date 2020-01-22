import { createAction, props } from '@ngrx/store';
import { Solution } from './interfaces';
import { Observable } from 'rxjs';

export const setFavourites = createAction('setFavourites [Solutions]', props<{ solutions: Solution[] }>());
export const setActive = createAction('setActive [Solutions]');
export const setArchived = createAction('setArchived [Solutions]');
export const refreshSolutions = createAction('refreshSolutions [Solutions]', props<{ filter: string }>());
