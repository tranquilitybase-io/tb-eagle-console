import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { startDeployment } from '@app/mission-control/applications/applications.actions';
import { Application } from '@app/mission-control/applications/applications.model';
import { AppUnderDeploymentComponent } from '@app/shared/snack-bar/app-under-deployment/app-under-deployment.component';

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
    console.log(this.app);
    this.dialogRef.close();
  }

  confirm() {
    this.snackBar.openFromComponent(AppUnderDeploymentComponent);
    this.store.dispatch(startDeployment({ id: this.app.id }));
    this.dialogRef.close();
  }

  sensitivityColor(app): string {
    return String(app.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }
}
