import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SolutionsState } from '../solutions.reducers';
import * as SolutionActions from '../solutions.actions';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-create-solution',
  templateUrl: './create-solution.component.html',
  styleUrls: ['./create-solution.component.scss']
})
export class CreateSolutionComponent implements OnInit {
  nameFormControl = new FormControl('', [Validators.required]);
  descFormControl = new FormControl('', [Validators.required]);
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

  formHeight: string = '20rem';

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
      name: '',
      desc: '',
      businessUnit: [''],
      ci: '',
      cd: '',
      sourceControl: '',
      envs: [''],
      active: true,
      favourite: true,
      applications: 0,
      teams: 0,
      lastUpdated: 'Just now'
    });
  }

  toggleSolutionPage() {
    this.onPartTwo = !this.onPartTwo;

    this.screenNum = this.screenNum == 0 ? (this.screenNum = 1) : (this.screenNum = 0);
  }

  onSubmit(solution) {
    this.store.dispatch(SolutionActions.createSolution({ solution }));
    this.router.navigateByUrl('/dashboard/solutions');
  }
}
