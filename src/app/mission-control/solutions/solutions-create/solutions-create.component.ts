import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { SolutionsState, selectCreateSolutionStatus } from '../solutions.reducer';
import { resetCreateSolutionStatus } from './../solutions.actions';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { createSolution } from '../solutions.actions';
import { Loadable } from '@app/shared/shared.reducer';

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

  createSolutionStatus$: Observable<Loadable> = this.store.select(selectCreateSolutionStatus);

  constructor(
    private store: Store<SolutionsState>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
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
      environments: [[]]
    });
    this.createSolutionStatus$.subscribe(status => this.handleLoading(status));
  }

  private handleLoading = (status: Loadable) => {
    status.success && this.navigateToSolutionsHome();
    if (status.loading) {
      this.detailsForm.disable();
      this.workspaceForm.disable();
    } else {
      this.detailsForm.enable();
      this.workspaceForm.enable();
    }
  };

  get f() {
    return this.detailsForm.controls;
  }

  get w() {
    return this.workspaceForm.controls;
  }

  navigateToSolutionsHome() {
    this.router.navigateByUrl('/mission-control/solutions');
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
}
