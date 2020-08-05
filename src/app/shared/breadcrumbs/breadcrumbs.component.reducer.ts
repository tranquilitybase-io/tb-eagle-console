import { createReducer, on, createSelector } from '@ngrx/store';
import { BreadcrumbStep } from './breadcrumbs.component.model';
import { updateBreadcrumbs, cutBreadcrumbsFrom } from './breadcrumbs.component.actions';

export interface BreadcrumbsState {
  steps: BreadcrumbStep[];
}

export const initialState: BreadcrumbsState = {
  steps: []
};

export const breadcrumbsReducer = createReducer(
  initialState,
  on(updateBreadcrumbs, (state, { steps }) => {
    let newState: BreadcrumbsState = mergeBreadcrumbs(state.steps, steps);
    console.log(newState);
    return newState;
  }),
  on(cutBreadcrumbsFrom, (state, { urlSegment }) => {
    let index = state.steps.findIndex(el => el.urlSegment === urlSegment);
    return { steps: state.steps.slice(index) };
  })
);

function mergeBreadcrumbs(currentState: BreadcrumbStep[], newBreadcrumbs: BreadcrumbStep[]): BreadcrumbsState {
  return {
    steps: currentState.map((el: BreadcrumbStep) => {
      let newStep = newBreadcrumbs.find(newEl => newEl.urlSegment === el.urlSegment);
      return newStep ? { ...el, ...newStep } : el;
    })
  };
}

export const breadcrumbsFeatureKey = 'breadcrumbs';

export const selectFeature = state => state[breadcrumbsFeatureKey];
export const selectBreadcrumbs = createSelector(selectFeature, state => state && state.steps);
