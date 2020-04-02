import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as ActivatorsActions from '@app/dashboards/activators/activators.actions';
import * as SolutionActions from '@app/dashboards/solutions/solutions.actions';
import { selectSelectedSolution } from '@app/dashboards/solutions/solutions.reducers';
import { Solution, Application } from '@app/dashboards/solutions/solutions.model';
import { Activator } from '../activators.model';
import { KeyValue } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MissingAvailableSolutionsDialogComponent } from '../dialogs/missing-available-solutions-dialog/missing-available-solutions-dialog.component';
import { setProgress } from '../activators.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
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
      this.dialog.open(MissingAvailableSolutionsDialogComponent, { disableClose: true, autoFocus: false });
    }
  }

  isFieldValid(field: string) {
    return this.applicationForm.get(field).touched && !this.applicationForm.get(field).valid;
  }

  onSubmit(application: Application) {
    if (this.applicationForm.valid) {
      this.store.dispatch(ActivatorsActions.createApplication({ application }));
      this.store.dispatch(SolutionActions.discardSelectedSolution());
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}
