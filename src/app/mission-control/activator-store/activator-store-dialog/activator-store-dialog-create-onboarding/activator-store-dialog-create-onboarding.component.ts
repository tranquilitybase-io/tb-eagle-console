import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectCreateActivatorByURLStatus, selectOnboardActivatorStatus } from '../../activator-store.reducer';
import { Loadable } from '@app/shared/shared.reducer';
import { Router } from '@angular/router';
import { ActivatorStoreDialogCreateOnboardingData } from '../../activator-store.model';
import { onboardActivator } from '../../activator-store.actions';

@Component({
  selector: 'app-activator-store-dialog-grant-access',
  templateUrl: './activator-store-dialog-create-onboarding.component.html',
  styleUrls: ['./activator-store-dialog-create-onboarding.component.scss']
})
export class ActivatorStoreDialogCreateOnboardingComponent implements OnInit {
  onboardActivatorStatus$: Observable<Loadable> = this.store.select(selectOnboardActivatorStatus);
  constructor(
    private store: Store<any>,
    private dialogRef: MatDialogRef<ActivatorStoreDialogCreateOnboardingComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: ActivatorStoreDialogCreateOnboardingData
  ) {}

  ngOnInit() {
    this.onboardActivatorStatus$.subscribe(status => {
      this.handleStatus(status);
    });
  }

  closeDialogOnSuccess(activatorMetadata) {
    if (Object.keys(activatorMetadata).length) {
      this.dialogRef.close();
    }
  }

  startOnboarding() {
    this.store.dispatch(onboardActivator({ activatorData: this.activator }));
  }

  cancel() {
    this.dialogRef.close();
  }

  handleStatus(status: Loadable) {
    if (status.success) {
      this.router.navigateByUrl(`/mission-control/activator-store/view?id=${this.activator.id}`);
      this.dialogRef.close();
    }
  }

  get activator() {
    return this.data.activator;
  }

  get redirect() {
    return this.data.redirect;
  }
}
