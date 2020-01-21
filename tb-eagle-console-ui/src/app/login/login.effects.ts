/*
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class ArticleEffects {

  constructor(private actions$: Actions) {}

  @Effect()
  loadAllArticles$: Observable<Action> = this.actions$
    .ofType('CREATE', 'UPDATE')
    .do(action => {
       console.log(action);
    });
}

*/
