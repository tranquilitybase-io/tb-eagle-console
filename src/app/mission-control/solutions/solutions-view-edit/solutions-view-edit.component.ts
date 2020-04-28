import { Component, OnInit, Input } from '@angular/core';

import { KeyValue } from '@angular/common';
import { SolutionsState } from '../solutions.reducer';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { createSolution, updateSolution } from '../solutions.actions';

@Component({
  selector: 'app-solutions-view-edit',
  templateUrl: './solutions-view-edit.component.html',
  styleUrls: ['./solutions-view-edit.component.scss']
})
export class SolutionsViewEditComponent implements OnInit {
  @Input() solutionForm: FormGroup;

  // solutionName: string = '';
  // solutionDescription: string = '';
  solutionBU: string = '';

  cdList: KeyValue<string, string>[];
  ciList: KeyValue<string, string>[];
  businessUnitList: KeyValue<string, string>[];
  sourceControlList: KeyValue<string, string>[];
  environmentList: KeyValue<string, string>[];

  constructor(
    private store: Store<SolutionsState>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.cdList = this.route.snapshot.data['cdList'];
    this.ciList = this.route.snapshot.data['ciList'];
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];
    this.sourceControlList = this.route.snapshot.data['sourceControlList'];
    this.environmentList = this.route.snapshot.data['environmentList'];

    this.solutionForm = this.formBuilder.group({
      id: 0,
      name: [''],
      description: [''],
      businessUnit: [''],
      costCentre: [''],
      ci: [''],
      cd: [''],
      sourceControl: [''],
      environments: ['']
    });
  }

  get solutionId(): string {
    return this.solutionForm.get('id').value;
  }

  get solutionName(): string {
    return this.solutionForm.get('name').value;
  }

  get solutionDescription(): string {
    return this.solutionForm.get('description').value;
  }

  get solutionBusinessUnit(): string {
    return this.solutionForm.get('businessUnit').value;
  }

  get solutionCostCentre(): string {
    return this.solutionForm.get('costCentre').value;
  }

  get solutionCi(): string {
    return this.solutionForm.get('ci').value;
  }

  get solutionCd(): string {
    return this.solutionForm.get('cd').value;
  }

  get solutionSourceControl(): string {
    return this.solutionForm.get('sourceControl').value;
  }

  get solutionEnvironments(): string {
    return this.solutionForm.get('environments').value;
  }

  cancel() {
    this.router.navigateByUrl('/mission-control/solutions');
  }

  onSubmit(solution) {
    this.store.dispatch(updateSolution({ solution })); // <- find specific solution
    this.router.navigateByUrl('/mission-control/solutions');
  }
}
