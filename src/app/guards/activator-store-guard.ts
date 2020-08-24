import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectIsSelectedSolution } from '../mission-control/solutions/solutions.reducer';
import { map, take } from 'rxjs/operators';
import { ActivatorStoreComponent } from '@app/mission-control/activator-store/activator-store.component';
import { MatDialog } from '@angular/material';
import { YesNoDialogComponent } from '@app/shared/dialogs/yes-no-dialog/yes-no-dialog/yes-no-dialog.component';
import { discardSelectedSolution } from '@app/mission-control/solutions/solutions.actions';
import { Observable, Observer, of } from 'rxjs';
import { isBoolean } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ActivatorStoreGuard implements CanDeactivate<ActivatorStoreComponent> {
  constructor(private store: Store<any>, private dialog: MatDialog) {}

  canDeactivate() {
    // let dialog = this.dialog.open(YesNoDialogComponent, { disableClose: true, autoFocus: false, data: { title: 'Application creation process was not finished', content: 'If you leave now, all progress will be lost. Do you still want to leave?' } })

    // return dialog.afterClosed();

    return this.store.pipe(select(selectIsSelectedSolution)).pipe(
      map(isSolutionSelected => {
        if (isSolutionSelected) {
          // let dialog = this.dialog.open(YesNoDialogComponent, { disableClose: true, autoFocus: false, data: { title: 'Application creation process was not finished', content: 'If you leave now, all progress will be lost. Do you still want to leave?' } })

          // return dialog.componentInstance.userInput$;

          // dialog.afterClosed().pipe(take(1)).subscribe(dialogResult => {
          //   if(dialogResult){
          //     this.store.dispatch(discardSelectedSolution());
          //     result.
          //     dialogResult
          //   }
          //   else {

          //   }
          // });

          // return result;
          // UnsavedChangesDialog defined somewhere else and imported above
          // return new Observable((observer: Observer<boolean>) => {
          //   let dialogRef = this.dialog.open(YesNoDialogComponent, { disableClose: true, autoFocus: false, data: { title: 'Application creation process was not finished', content: 'If you leave now, all progress will be lost. Do you still want to leave?' } });

          //   dialogRef.afterClosed().subscribe(result => {
          //       observer.next(result);
          //       observer.complete();
          //     }, (error) => {
          //       observer.next(false);
          //       observer.complete();
          //     }
          //   );
          // });

          if (confirm('Application creation was not finished. Do you still want to leave?')) {
            this.store.dispatch(discardSelectedSolution());
            return true;
          } else {
            return false;
          }
        } else return true;
      })
    );
  }
}
