import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MatDialog, MatStepper } from '@angular/material';
import { KeyValue } from '@angular/common';
import { createApplication } from '../applications.actions';
import { setProgress } from '@app/mission-control/activator-store/activator-store.actions';
import { Activator } from '@app/mission-control/activator-store/activator-store.model';
import { Application } from '../applications.model';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { selectSelectedSolution } from '@app/mission-control/solutions/solutions.reducer';
import { discardSelectedSolution } from '@app/mission-control/solutions/solutions.actions';
import { ActivatorStoreDialogMissingSolutionsComponent } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog-missing-solutions/activator-store-dialog-missing-solutions.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applications-create',
  templateUrl: './applications-create.component.html',
  styleUrls: ['./applications-create.component.scss']
})
export class ApplicationsCreateComponent implements OnInit, AfterViewInit {
  applicationForm: FormGroup;
  availableSolutions: KeyValue<string, string>[];

  isSelectedSolution$: Observable<Solution>;
  selectedSolutionName: string;
  selectedActivatorName: string;

  @ViewChild('stepper', { static: false })
  stepper: MatStepper;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<any>,
    private dialog: MatDialog,
    private router: Router
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

    this.selectedActivatorName = activator.name;
    this.isSelectedSolution$ = this.store.pipe(select(selectSelectedSolution));

    this.store.pipe(select(selectSelectedSolution)).subscribe((solution: Solution) => {
      if (solution) {
        this.applicationForm.controls['solutionId'].setValue(String(solution.id));
        this.selectedSolutionName = solution.name;
      }
    });
    if (!(availableSolutions.length || this.dialog.openDialogs.length)) {
      this.dialog.open(ActivatorStoreDialogMissingSolutionsComponent, { disableClose: true, autoFocus: false });
    }
  }

  // Small hack because of https://github.com/angular/components/issues/8479#issuecomment-444063732
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => (this.stepper.selectedIndex = 1));
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

  onNavigateStepperBack() {
    this.router.navigateByUrl('/mission-control/activator-store');
  }
}
