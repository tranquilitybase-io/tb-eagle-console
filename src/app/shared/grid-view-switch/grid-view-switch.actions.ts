import { createAction, props } from '@ngrx/store';
import { GridViewSwitchModel } from './grid-view-switch.model';

export const setGridViewOption = createAction(
  '[GridViewSwitch] setGridViewOption',
  props<{ viewOption: GridViewSwitchModel }>()
);
