import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { SolutionUnderCreationComponent } from '@app/shared/snack-bar/solution-under-creation/solution-under-creation.component';
import { startDeployment } from '@app/mission-control/solutions/solutions.actions';
import { Environment } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.model';

@Component({
  selector: 'app-solutions-home-dialog-deploy.component',
  templateUrl: './solutions-home-dialog-deploy.component.html',
  styleUrls: ['./solutions-home-dialog-deploy.component.scss']
})
export class SolutionsHomeDialogDeployComponent {
  constructor(
    private store: Store<any>,
    private dialogRef: MatDialogRef<SolutionsHomeDialogDeployComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private solution: Solution
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  confirm() {
    this.snackBar.openFromComponent(SolutionUnderCreationComponent);
    this.store.dispatch(startDeployment({ id: this.solution.id }));
    this.dialogRef.close();
  }

  edit() {
    this.dialogRef.close();
  }

  get environments(): string[] {
    return (this.solution.environments as Environment[]).map((env: Environment) => env.name);
  }
}
