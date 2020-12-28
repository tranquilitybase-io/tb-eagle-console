import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {} from './shared-service.actions';
import { SharedServiceService } from './shared-service.service';

@Injectable()
export class LandingZoneEnvironmentEffects {}
