import { createAction, props } from '@ngrx/store';
import { LandingZoneAction } from '../landing-zone.model';

const key = '[Landing-Zone-Home]';

export const getLandingZoneActions = createAction(`${key} getLandingZoneActions`);
export const getLandingZoneActionsSuccess = createAction(
  `${key} getLandingZoneActionsSuccess`,
  props<{ landingZoneActions: LandingZoneAction[] }>()
);
export const getLandingZoneActionsError = createAction(`${key} getLandingZoneActionsError`, props<{ error: any }>());
