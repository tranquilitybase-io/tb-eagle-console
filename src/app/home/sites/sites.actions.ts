import { createAction, props } from '@ngrx/store';

import { TableData } from './sites.model';

const key = '[sites]';

export const getSites = createAction(`${key} getSites`);
export const getSitesSuccess = createAction(`${key} getSitesSuccess`, props<{ sites: TableData[] }>());
export const getSitesError = createAction(`${key} getSitesError`, props<{ error: any }>());
