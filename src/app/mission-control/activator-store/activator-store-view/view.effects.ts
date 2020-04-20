import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { DeploymentsService } from './deployments.service';

import { changePage, setLength } from './view.actions';

@Injectable()
export class ViewEffects implements OnInitEffects {
  loadDeployments$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(changePage),
        switchMap(({ page }) => {
          this.deploymentsService.clearCache();

          // return this.deploymentsService.getWithQuery({
          //   _page: page.toString(),
          //   _limit: '10'
          // });
          return this.deploymentsService.getAll();
        })
      ),
    { dispatch: false }
  );

  // loadSize$ = createEffect(() =>
  //   this.deploymentsService.fetchMetaDataForDeployments().pipe(map(payload => setLength(payload)))
  // );

  constructor(private actions$: Actions, private deploymentsService: DeploymentsService) {}

  ngrxOnInitEffects(): Action {
    return changePage({ page: 1 });
  }
}
