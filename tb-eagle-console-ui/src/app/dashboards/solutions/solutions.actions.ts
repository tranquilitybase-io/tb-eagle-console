import { createAction, props } from '@ngrx/store';
import { Solution } from './interfaces';
import { Observable } from 'rxjs';

export const setSolutions = createAction(
  'setSolutions [Solutions]',
  props<{ solutions: Solution[]; filter: string }>()
);
export const refreshSolutions = createAction('refreshSolutions [Solutions]', props<{ filter: string }>());

export const createSolution = createAction('[solutions-creation] create-solution', props<{ solution: Solution }>());
