import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectIsSelectedSolution } from '../mission-control/solutions/solutions.reducer';
import { map } from 'rxjs/operators';
import { ActivatorStoreComponent } from '@app/mission-control/activator-store/activator-store.component';
import { discardSelectedSolution } from '@app/mission-control/solutions/solutions.actions';

@Injectable({
  providedIn: 'root'
})
export class ActivatorStoreGuard implements CanDeactivate<ActivatorStoreComponent> {
  constructor(private store: Store<any>) {}

  canDeactivate() {
    return this.store.pipe(select(selectIsSelectedSolution)).pipe(
      map(isSolutionSelected => {
        if (isSolutionSelected) {
          if (confirm('Application creation was not finished. Do you still want to leave?')) {
            this.store.dispatch(discardSelectedSolution());
            return true;
          } else {
            return false;
          }
        }
        return true;
      })
    );
  }
}
