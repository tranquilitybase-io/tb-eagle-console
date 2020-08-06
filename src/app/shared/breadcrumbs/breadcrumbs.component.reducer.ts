import { createReducer, on, createSelector } from '@ngrx/store';
import { BreadcrumbStep } from './breadcrumbs.component.model';
import { updateBreadcrumbs, cutBreadcrumbsFrom } from './breadcrumbs.component.actions';

export interface BreadcrumbsState {
  breadcrumbsSteps: BreadcrumbStep[];
}

export const initialState: BreadcrumbsState = {
  breadcrumbsSteps: []
};

export default function reducer(state, action) {
  return breadcrumbsReducer(state, action);
}

export const breadcrumbsReducer = createReducer(
  initialState,
  on(updateBreadcrumbs, (state, { breadcrumbsSteps }) => {
    return mergeBreadcrumbs(state.breadcrumbsSteps, breadcrumbsSteps);
  }),
  on(cutBreadcrumbsFrom, (state, { urlSegment }) => {
    return sliceBreadcrumbsAfterUrl(state, urlSegment);
  })
);

/**
 * Analyze if new breadcrumbs are from the same page,
 * if yes, merge both arrays (update existing elements and append new ones),
 * if not, return new breadcrumbs.
 * @param currentState current breadcrumbs steps array
 * @param newBreadcrumbs new breadcrumbs steps array
 */
function mergeBreadcrumbs(currentState: BreadcrumbStep[], newBreadcrumbs: BreadcrumbStep[]): BreadcrumbsState {
  let currentBreadcrumbsSegments = currentState.map(el => el.parentUrl);
  let newBreadcrumbSegments = newBreadcrumbs.map(el => el.parentUrl);
  let isNewBreadcrumbsTree = currentBreadcrumbsSegments.filter(el => newBreadcrumbSegments.includes(el)).length === 0;

  // Create new breadcrumbs from scratch
  if (isNewBreadcrumbsTree) {
    return { breadcrumbsSteps: newBreadcrumbs };
  }
  // Merge both BCs arrays
  else {
    // Update existing elements
    let newState: BreadcrumbStep[] = currentState.map((bcs: BreadcrumbStep) => {
      if (newBreadcrumbSegments.includes(bcs.parentUrl)) {
        return { ...bcs, ...newBreadcrumbs.find(newBC => newBC.parentUrl === bcs.parentUrl) };
      } else {
        return bcs;
      }
    });

    // Append new elements
    let firstNewElement = newBreadcrumbs.find(el => !currentBreadcrumbsSegments.includes(el.parentUrl));
    let firstNewElementIndex = newBreadcrumbs.indexOf(firstNewElement);
    newState = newState.concat(newBreadcrumbs.slice(firstNewElementIndex));

    return {
      breadcrumbsSteps: newState
    };
  }
}

/**
 * Cut elements after element with given urlSegment (e.g. after going 'up' in breadcrumbs).
 * If url is not found, does nothing.
 * @param state current state
 * @param urlSegment url to slice from
 */
function sliceBreadcrumbsAfterUrl(state: BreadcrumbsState, urlSegment: string): BreadcrumbsState {
  let index = state.breadcrumbsSteps.findIndex(el => el.parentUrl === urlSegment);
  if (index >= 0) return { breadcrumbsSteps: state.breadcrumbsSteps.slice(0, index) };
  else return { breadcrumbsSteps: state.breadcrumbsSteps };
}

export const breadcrumbsFeatureKey = 'breadcrumbsSteps';

export const selectFeature = state => state[breadcrumbsFeatureKey];
export const selectBreadcrumbs = createSelector(selectFeature, state => {
  return state && state.breadcrumbsSteps;
});
