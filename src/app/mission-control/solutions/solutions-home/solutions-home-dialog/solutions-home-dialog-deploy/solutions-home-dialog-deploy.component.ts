import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { SolutionUnderCreationComponent } from '@app/shared/snack-bar/solution-under-creation/solution-under-creation.component';
import { startDeployment } from '@app/mission-control/solutions/solutions.actions';
import { Environment } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solutions-home-dialog-deploy.component',
  templateUrl: './solutions-home-dialog-deploy.component.html',
  styleUrls: ['./solutions-home-dialog-deploy.component.scss'],
})
export class SolutionsHomeDialogDeployComponent {
  constructor(
    private dialogRef: MatDialogRef<SolutionsHomeDialogDeployComponent>,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store<any>,
    @Inject(MAT_DIALOG_DATA) public solution: Solution
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
    this.router.navigateByUrl(`/mission-control/solutions/edit?id=${this.solution.id}`);
    this.dialogRef.close();
  }

  get environments(): string[] {
    return (this.solution.environments as Environment[]).map((env: Environment) => env.name);
  }
}
