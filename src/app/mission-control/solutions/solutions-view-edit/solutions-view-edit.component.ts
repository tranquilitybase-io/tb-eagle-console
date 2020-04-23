import { Component, OnInit } from '@angular/core';

import { KeyValue } from '@angular/common';
import { SolutionsState } from '../solutions.reducer';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { createSolution } from '../solutions.actions';
// TODO: add updateSolution to actions
@Component({
  selector: 'app-solutions-view-edit',
  templateUrl: './solutions-view-edit.component.html',
  styleUrls: ['./solutions-view-edit.component.scss']
})
export class SolutionsViewEditComponent implements OnInit {
  onPartTwo: boolean = false;
  screenNum: number = 0;

  solutionName: string = '';
  solutionDescription: string = '';
  solutionBU: string = '';

  cdList: KeyValue<string, string>[];
  ciList: KeyValue<string, string>[];
  businessUnitList: KeyValue<string, string>[];
  sourceControlList: KeyValue<string, string>[];
  environmentList: KeyValue<string, string>[];

  solutionForm;

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
      name: ['', Validators.required],
      description: ['', Validators.required],
      businessUnit: ['', Validators.required],
      costCentre: ['', Validators.required],
      ci: ['', Validators.required],
      cd: ['', Validators.required],
      sourceControl: ['', Validators.required],
      environments: ['']
    });
  }

  toggleSolutionPage() {
    this.onPartTwo = !this.onPartTwo;

    this.screenNum = this.screenNum == 0 ? (this.screenNum = 1) : (this.screenNum = 0);
  }

  onSubmit(solution) {
    this.store.dispatch(createSolution({ solution })); // TODO: use updateSolution
    this.router.navigateByUrl('/mission-control/solutions');
  }
}
