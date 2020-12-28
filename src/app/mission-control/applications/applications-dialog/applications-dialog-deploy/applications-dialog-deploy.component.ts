import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { startDeployment } from '@app/mission-control/applications/applications.actions';
import { Application } from '@app/mission-control/applications/applications.model';
import { AppUnderDeploymentComponent } from '@app/shared/snack-bar/app-under-deployment/app-under-deployment.component';
import { Activator } from '@app/mission-control/activator-store/activator-store.model';

@Component({
  selector: 'app-solutions-home-dialog-deploy.component',
  templateUrl: './applications-dialog-deploy.component.html',
  styleUrls: ['./applications-dialog-deploy.component.scss']
})
export class ApplicationsDialogDeployComponent {
  constructor(
    private store: Store<any>,
    private dialogRef: MatDialogRef<ApplicationsDialogDeployComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public app: Application
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  confirm() {
    this.snackBar.openFromComponent(AppUnderDeploymentComponent);
    this.store.dispatch(startDeployment({ id: this.app.id }));
    this.dialogRef.close();
  }

  get activator(): Activator {
    return this.app ? this.app.activator : ({} as Activator);
  }

  sensitivityColor(app): string {
    return String(app.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }
}
