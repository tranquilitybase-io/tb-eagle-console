import { createReducer, on, createSelector } from '@ngrx/store';
import { GridViewSwitchViewsNames, GridViewSwitchOptionsEnum } from './grid-view-switch.model';
import { setGridViewOption } from './grid-view-switch.actions';

export interface GridViewSwitchState {
  [GridViewSwitchViewsNames.activatorStore]: GridViewSwitchOptionsEnum;
  [GridViewSwitchViewsNames.landingZone]: GridViewSwitchOptionsEnum;
  [GridViewSwitchViewsNames.solutions]: GridViewSwitchOptionsEnum;
  [GridViewSwitchViewsNames.teams]: GridViewSwitchOptionsEnum;
  [GridViewSwitchViewsNames.users]: GridViewSwitchOptionsEnum;
  [GridViewSwitchViewsNames.solutionsView]: GridViewSwitchOptionsEnum;
  [GridViewSwitchViewsNames.applicationDeployments]: GridViewSwitchOptionsEnum;
  [GridViewSwitchViewsNames.teamMembers]: GridViewSwitchOptionsEnum;
  [GridViewSwitchViewsNames.businessUnit]: GridViewSwitchOptionsEnum;
}

const initialState: GridViewSwitchState = {
  [GridViewSwitchViewsNames.activatorStore]: GridViewSwitchOptionsEnum.grid,
  [GridViewSwitchViewsNames.landingZone]: GridViewSwitchOptionsEnum.grid,
  [GridViewSwitchViewsNames.solutions]: GridViewSwitchOptionsEnum.grid,
  [GridViewSwitchViewsNames.teams]: GridViewSwitchOptionsEnum.grid,
  [GridViewSwitchViewsNames.users]: GridViewSwitchOptionsEnum.grid,
  [GridViewSwitchViewsNames.solutionsView]: GridViewSwitchOptionsEnum.grid,
  [GridViewSwitchViewsNames.applicationDeployments]: GridViewSwitchOptionsEnum.row,
  [GridViewSwitchViewsNames.teamMembers]: GridViewSwitchOptionsEnum.row,
  [GridViewSwitchViewsNames.businessUnit]: GridViewSwitchOptionsEnum.grid
};

export const gridViewSwitchReducer = createReducer(
  initialState,
  on(setGridViewOption, (state, { viewOption }) => ({ ...state, [viewOption.viewName]: viewOption.option }))
);

export default function reducer(state, action) {
  return gridViewSwitchReducer(state, action);
}

export const solutionFeatureKey = 'gridViewSwitchOptions';

export const selectFeature = state => state[solutionFeatureKey];

export const selectGridViewSwitchOptions = (selectedOptionName: string) =>
  createSelector(selectFeature, state => {
    return state && state[selectedOptionName];
  });
