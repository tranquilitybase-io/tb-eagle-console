import { createAction, props } from '@ngrx/store';
import { LandingZoneProgressItem } from './landing-zone.model';

export const getLandingZoneProgressItems = createAction('[landing-zone-environment] getLandingZoneProgressItems');
export const getLandingZoneProgressItemsError = createAction(
  '[landing-zone-environment] getLandingZoneProgressItemsError',
  props<{ error: any }>()
);
export const getLandingZoneProgressItemsSuccess = createAction(
  '[landing-zone-environment] getLandingZoneProgressItemsSuccess',
  props<{ landingZoneProgressItems: LandingZoneProgressItem[] }>()
);
