import { Component, OnInit, Input } from '@angular/core';

import { KeyValue } from '@angular/common';
import { SolutionsState } from '../solutions.reducer';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { createSolution, updateSolution } from '../solutions.actions';
import { Solution } from '../solutions.model';

@Component({
  selector: 'app-solutions-edit',
  templateUrl: './solutions-edit.component.html',
  styleUrls: ['./solutions-edit.component.scss']
})
export class SolutionsEditComponent implements OnInit {
  solution: Solution;

  solutionForm: FormGroup;

  solutionName: string = '';
  solutionDescription: string = '';
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
    this.solution = this.route.snapshot.data['solution'];

    this.solutionForm = this.formBuilder.group({
      id: this.solution.id,
      name: [this.solution.name],
      description: [this.solution.description],
      businessUnit: [this.solution.businessUnit],
      costCentre: [this.solution.costCentre],
      ci: [this.solution.ci],
      cd: [this.solution.cd],
      sourceControl: [this.solution.sourceControl],
      environments: [this.solution.environments]
    });
  }

  cancel() {
    this.router.navigateByUrl('/mission-control/solutions');
  }

  onSubmit(solution) {
    this.store.dispatch(updateSolution({ solution })); // <- find specific solution
    this.router.navigateByUrl('/mission-control/solutions');
  }
}
