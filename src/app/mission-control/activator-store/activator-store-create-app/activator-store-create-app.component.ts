import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { setProgress, createApplication } from '../activator-store.actions';
import { Activator } from '../activator-store.model';
import { Application } from '@app/mission-control/applications/applications.model';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { selectSelectedSolution } from '@app/mission-control/solutions/solutions.reducer';
import { ActivatorStoreDialogMissingSolutionsComponent } from '../activator-store-dialog/activator-store-dialog-missing-solutions/activator-store-dialog-missing-solutions.component';
import { discardSelectedSolution } from '@app/mission-control/solutions/solutions.actions';

@Component({
  selector: 'app-activator-store-create-app',
  templateUrl: './activator-store-create-app.component.html',
  styleUrls: ['./activator-store-create-app.component.scss']
})
export class ActivatorStoreCreateAppComponent implements OnInit {
  applicationForm: FormGroup;
  availableSolutions: KeyValue<string, string>[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<any>,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.store.dispatch(setProgress({ step: 1 }));
    const activator = this.route.snapshot.data['activator'] as Activator;
    const availableSolutions = this.route.snapshot.data['availableSolutions'] as Solution[];
    this.availableSolutions = availableSolutions.map(solution => ({ key: String(solution.id), value: solution.name }));

    this.applicationForm = this.formBuilder.group({
      solutionId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      env: 'DEV',
      status: 'Inactive',
      activatorId: activator.id
    });

    this.store.pipe(select(selectSelectedSolution)).subscribe((solution: Solution) => {
      if (solution) {
        this.applicationForm.controls['solutionId'].setValue(String(solution.id));
      }
    });

    if (!(availableSolutions.length || this.dialog.openDialogs.length)) {
      this.dialog.open(ActivatorStoreDialogMissingSolutionsComponent, { disableClose: true, autoFocus: false });
    }
  }

  isFieldValid(field: string) {
    return this.applicationForm.get(field).touched && !this.applicationForm.get(field).valid;
  }

  onSubmit(application: Application) {
    if (this.applicationForm.valid) {
      this.store.dispatch(createApplication({ application }));
      this.store.dispatch(discardSelectedSolution());
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}
