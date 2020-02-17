import { SolutionDetailsComponent } from './../solution-details/solution-details.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SolutionsService } from '@app/dashboards/solutions/solutions.service';
import { SolutionsState } from '../solutions.reducers';
import * as SolutionActions from '../solutions.actions';
import { Solution } from '../interfaces';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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
  availableEnvs: string[] = ['Development', 'Production'];

  formHeight: string = '20rem';

  solutionForm;

  constructor(
    private solutionsService: SolutionsService,
    private store: Store<SolutionsState>,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
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
