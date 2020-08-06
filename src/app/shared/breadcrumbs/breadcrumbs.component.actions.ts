import { createAction, props } from '@ngrx/store';
import { BreadcrumbStep } from './breadcrumbs.component.model';

export const updateBreadcrumbs = createAction(
  '[Breadcrumbs] updateBreadcrumbs',
  props<{ breadcrumbsSteps: BreadcrumbStep[] }>()
);

export const cutBreadcrumbsFrom = createAction('[Breadcrumbs] cutBreadcrumbsFrom', props<{ urlSegment: string }>());
