import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { KeyValue } from '@angular/common';
import { setProgress, createApplication } from '@app/mission-control/activator-store/activator-store.actions';
import { Activator } from '@app/mission-control/activator-store/activator-store.model';
import { Application } from '../applications.model';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { selectSelectedSolution } from '@app/mission-control/solutions/solutions.reducer';
import { discardSelectedSolution } from '@app/mission-control/solutions/solutions.actions';
import { ActivatorStoreDialogMissingSolutionsComponent } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog-missing-solutions/activator-store-dialog-missing-solutions.component';

@Component({
  selector: 'app-applications-create',
  templateUrl: './applications-create.component.html',
  styleUrls: ['./applications-create.component.scss']
})
export class ApplicationsCreateComponent implements OnInit {
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
