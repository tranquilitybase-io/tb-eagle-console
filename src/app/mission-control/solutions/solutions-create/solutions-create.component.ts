import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { SolutionsState, selectCreateSolutionStatus } from '../solutions.reducer';
import { select, Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { createSolution, resetCreateSolutionStatus } from '../solutions.actions';
import { Loadable } from '@app/shared/shared.reducer';
import { ApiCallStatusComponent } from '@app/shared/snack-bar/api-call-status/api-call-status.component';

@Component({
  selector: 'app-solutions-create',
  templateUrl: './solutions-create.component.html',
  styleUrls: ['./solutions-create.component.scss']
})
export class SolutionsCreateComponent implements OnInit {
  businessUnitList: KeyValue<number, string>[];
  cdList: KeyValue<number, string>[];
  ciList: KeyValue<number, string>[];
  environmentList: KeyValue<number, string>[];
  sourceControlList: KeyValue<number, string>[];
  teamList: KeyValue<number, string>[];

  detailsForm: FormGroup;
  workspaceForm: FormGroup;

  createSolutionStatus$: Observable<Loadable>;

  constructor(
    private store: Store<SolutionsState>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.dispatch(resetCreateSolutionStatus());
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];
    this.cdList = this.route.snapshot.data['cdList'];
    this.ciList = this.route.snapshot.data['ciList'];
    this.environmentList = this.route.snapshot.data['environmentList'];
    this.sourceControlList = this.route.snapshot.data['sourceControlList'];
    this.teamList = this.route.snapshot.data['teamList'];

    this.detailsForm = this.formBuilder.group({
      id: 0,
      name: ['', Validators.required],
      description: ['', Validators.required],
      businessUnitId: ['', Validators.required],
      teamId: ['', Validators.required],
      costCentre: ['', Validators.required]
    });

    this.workspaceForm = this.formBuilder.group({
      ciId: ['', Validators.required],
      cdId: ['', Validators.required],
      sourceControlId: ['', Validators.required],
      isSandbox: [false],
      environments: [[]]
    });

    this.createSolutionStatus$ = this.store.pipe(select(selectCreateSolutionStatus));
    this.createSolutionStatus$.subscribe(status => {
      this.handleSubmitStatus(status);
    });
  }

  get f() {
    return this.detailsForm.controls;
  }

  get w() {
    return this.workspaceForm.controls;
  }

  navigateToSolutionsHome() {
    this.router.navigateByUrl('/mission-control/solutions');
  }

  handleSubmitStatus(status: Loadable) {
    if (status.success) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Solution has been created', success: true },
        duration: 3500
      });
      this.navigateToSolutionsHome();
    } else if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. Solution has not been created', success: false },
        duration: 3500
      });
      this.navigateToSolutionsHome();
    }
  }

  onSubmit() {
    if (this.detailsForm.valid && this.workspaceForm.valid) {
      let solution = Object.assign(this.detailsForm.value, this.workspaceForm.value);
      this.store.dispatch(createSolution({ solution }));
    } else {
      this.detailsForm.markAllAsTouched();
      this.workspaceForm.markAllAsTouched();
    }
  }

  onIsSandboxCheck({ checked }) {
    this.workspaceForm.markAsUntouched();
    if (checked) {
      this.workspaceForm.controls['ciId'].setValue(0);
      this.workspaceForm.controls['cdId'].setValue(0);
      this.workspaceForm.controls['sourceControlId'].setValue(0);
      this.workspaceForm.controls['environments'].setValue([]);
    } else {
      this.workspaceForm.controls['ciId'].setValue('');
      this.workspaceForm.controls['cdId'].setValue('');
      this.workspaceForm.controls['sourceControlId'].setValue('');
      this.workspaceForm.controls['environments'].setValue([]);
    }
  }

  get name(): string {
    return this.detailsForm.get('name').value;
  }

  get description(): string {
    return this.detailsForm.get('description').value;
  }

  get costCentre(): string {
    return this.detailsForm.get('costCentre').value;
  }

  get businessUnit(): string {
    return this.detailsForm.get('businessUnitId').value
      ? this.businessUnitList.find(x => x.key === this.detailsForm.get('businessUnitId').value).value
      : '';
  }

  get team(): string {
    return this.detailsForm.get('teamId').value
      ? this.teamList.find(x => x.key === this.detailsForm.get('teamId').value).value
      : '';
  }

  get ci(): string {
    return this.workspaceForm.get('ciId').value
      ? this.ciList.find(x => x.key === this.workspaceForm.get('ciId').value).value
      : '';
  }

  get cd(): string {
    return this.workspaceForm.get('cdId').value
      ? this.cdList.find(x => x.key === this.workspaceForm.get('cdId').value).value
      : '';
  }

  get sourceControl(): string {
    return this.workspaceForm.get('sourceControlId').value
      ? this.sourceControlList.find(x => x.key === this.workspaceForm.get('sourceControlId').value).value
      : '';
  }

  get environments(): string[] {
    const envIds = this.workspaceForm.get('environments').value as number[];
    return this.environmentList.filter(x => envIds.some(id => id === x.key)).map(x => x.value);
  }

  get isSandbox(): boolean {
    return this.workspaceForm.get('isSandbox').value;
  }
}
