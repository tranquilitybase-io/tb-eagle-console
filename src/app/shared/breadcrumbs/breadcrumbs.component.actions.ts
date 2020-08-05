import { createAction, props } from '@ngrx/store';
import { BreadcrumbStep } from './breadcrumbs.component.model';

export const updateBreadcrumbs = createAction('[Breadcrumbs] updateBreadcrumbs', props<{ steps: BreadcrumbStep[] }>());

export const cutBreadcrumbsFrom = createAction('[Breadcrumbs] cutBreadcrumbsFrom', props<{ urlSegment: string }>());
