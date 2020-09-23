import { createReducer, on, createSelector } from '@ngrx/store';
import { GridViewSwitchModel, GridViewSwitchViewsNames, GridViewSwitchOptionsEnum } from './grid-view-switch.model';
import { setGridViewOption } from './grid-view-switch.actions';

export interface GridViewSwitchState {
  gridViewSwitchOptions: GridViewSwitchModel[];
}

const initialState: GridViewSwitchState = {
  gridViewSwitchOptions: [
    {
      viewName: GridViewSwitchViewsNames.activatorStore,
      option: GridViewSwitchOptionsEnum.grid
    },
    {
      viewName: GridViewSwitchViewsNames.landingZone,
      option: GridViewSwitchOptionsEnum.grid
    },
    {
      viewName: GridViewSwitchViewsNames.solutions,
      option: GridViewSwitchOptionsEnum.grid
    },
    {
      viewName: GridViewSwitchViewsNames.teams,
      option: GridViewSwitchOptionsEnum.grid
    },
    {
      viewName: GridViewSwitchViewsNames.users,
      option: GridViewSwitchOptionsEnum.grid
    },
    {
      viewName: GridViewSwitchViewsNames.solutionsView,
      option: GridViewSwitchOptionsEnum.grid
    },
    {
      viewName: GridViewSwitchViewsNames.applicationDeployments,
      option: GridViewSwitchOptionsEnum.row
    },
    {
      viewName: GridViewSwitchViewsNames.teamMembers,
      option: GridViewSwitchOptionsEnum.row
    }
  ]
};

export const gridViewSwitchReducer = createReducer(
  initialState,
  on(setGridViewOption, (state, { viewOption }) => {
    let optionIndex = state.gridViewSwitchOptions.findIndex(vO => vO.viewName === viewOption.viewName);
    state.gridViewSwitchOptions[optionIndex] = viewOption;
    return { ...state, gridViewSwitchOptions: [...state.gridViewSwitchOptions] };
  })
);

export default function reducer(state, action) {
  return gridViewSwitchReducer(state, action);
}

export const solutionFeatureKey = 'gridViewSwitchOptions';

export const selectFeature = state => state[solutionFeatureKey];

export const selectGridViewSwitchOptions = createSelector(selectFeature, (state, selectedOptionName) => {
  return (
    state &&
    state.gridViewSwitchOptions &&
    state.gridViewSwitchOptions.find((viewOption: GridViewSwitchModel) => viewOption.viewName === selectedOptionName)
  );
});
