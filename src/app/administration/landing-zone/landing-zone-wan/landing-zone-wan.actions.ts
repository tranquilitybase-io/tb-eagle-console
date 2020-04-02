import { createAction, props } from '@ngrx/store';
import { WanConfiguration } from './landing-zone-wan.model';

export const createWanConfiguration = createAction(
  '[landing-zone-wan-create-configuration] Creates WAN configuration',
  props<{ wanConfiguration: WanConfiguration }>()
);
