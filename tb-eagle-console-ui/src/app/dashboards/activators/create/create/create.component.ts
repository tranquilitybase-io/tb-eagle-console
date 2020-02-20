import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as SolutionActions from '@app/dashboards/solutions/solutions.actions';
import { Application } from '../../interfaces';
import { selectSelectedSolution } from '@app/dashboards/solutions/solutions.reducers';
import { Solution } from '@app/dashboards/solutions/interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  @Input() activator: any;
  applicationForm: FormGroup;
  private solution: Solution;

  constructor(private router: Router, private store: Store<any>, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.store.pipe(select(selectSelectedSolution)).subscribe((solution: Solution) => {
      this.solution = solution;
    });
    this.applicationForm = this.formBuilder.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      activator: this.activator
    });
  }

  isFieldValid(field: string) {
    return this.applicationForm.get(field).touched && !this.applicationForm.get(field).valid;
  }

  onSubmit(application: Application) {
    if (this.applicationForm.valid) {
      this.store.dispatch(SolutionActions.appendApplication({ solutionId: this.solution.id, application }));
      this.router.navigateByUrl(`/dashboard/solutions/view?id=${this.solution.id}&categorySwitch=Applications`);
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}
