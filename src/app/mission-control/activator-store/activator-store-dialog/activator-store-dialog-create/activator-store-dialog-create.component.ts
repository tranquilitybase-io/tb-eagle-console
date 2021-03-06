import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createActivatorByURL, resetActivatorDataStatus } from '../../activator-store.actions';
import { selectCreateActivatorByURLStatus } from '../../activator-store.reducer';
import { Loadable } from '@app/shared/shared.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activator-store-dialog-grant-access',
  templateUrl: './activator-store-dialog-create.component.html',
  styleUrls: ['./activator-store-dialog-create.component.scss'],
})
export class ActivatorStoreDialogCreateComponent implements OnInit {
  createActivatorForm: FormGroup;
  createActivatorByURLStatus$: Observable<Loadable> = this.store.select(selectCreateActivatorByURLStatus);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private dialogRef: MatDialogRef<ActivatorStoreDialogCreateComponent>,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.createActivatorByURLStatus$.subscribe((status) => {
      this.handleStatus(status);
    });
    this.createActivatorForm = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
    });
  }

  createActivator() {
    if (this.createActivatorForm.valid) {
      this.store.dispatch(createActivatorByURL({ url: this.createActivatorForm.value.url }));
    } else {
      this.createActivatorForm.markAllAsTouched();
    }
  }

  closeDialogOnSuccess(activatorMetadata) {
    if (Object.keys(activatorMetadata).length) {
      this.dialogRef.close();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  handleStatus(status: Loadable) {
    status.loading && this.createActivatorForm.disable();
    if (status.success) {
      this.router.navigate(['/mission-control/activator-store/create']);
      this.store.dispatch(resetActivatorDataStatus());
      this.dialogRef.close();
    } else if (status.error) {
      this.createActivatorForm.enable();
      this.store.dispatch(resetActivatorDataStatus());
    }
  }
}
