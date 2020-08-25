import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectIsSelectedSolution } from '../mission-control/solutions/solutions.reducer';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatorStoreComponent } from '@app/mission-control/activator-store/activator-store.component';
import { MatDialog } from '@angular/material';
import { YesNoDialogComponent } from '@app/shared/dialogs/yes-no-dialog/yes-no-dialog/yes-no-dialog.component';
import { discardSelectedSolution } from '@app/mission-control/solutions/solutions.actions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivatorStoreGuard implements CanDeactivate<ActivatorStoreComponent> {
  constructor(private store: Store<any>, private dialogService: MatDialog) {}

  canDeactivate(): Observable<boolean> {
    return this.store.pipe(select(selectIsSelectedSolution)).pipe(
      mergeMap(isSolutionSelected => {
        if (isSolutionSelected) {
          return this.dialogService
            .open(YesNoDialogComponent, {
              disableClose: true,
              autoFocus: false,
              data: {
                title: 'Application creation process was not finished',
                content: 'If you leave now, all progress will be lost. Do you still want to leave?'
              }
            })
            .afterClosed()
            .pipe(
              map(dialogResult => {
                if (dialogResult) {
                  this.store.dispatch(discardSelectedSolution());
                  return true;
                } else return false;
              })
            );
        } else return of(true);
      })
    );
  }
}
