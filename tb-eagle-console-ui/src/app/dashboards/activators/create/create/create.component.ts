import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as SolutionActions from '@app/dashboards/solutions/solutions.actions';
import { selectSelectedSolution } from '@app/dashboards/solutions/solutions.reducers';
import { Solution, Application } from '@app/dashboards/solutions/interfaces';
import { Activator } from '../../interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  applicationForm: FormGroup;
  private solution: Solution;

  constructor(private route: ActivatedRoute, private store: Store<any>, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.store.pipe(select(selectSelectedSolution)).subscribe((solution: Solution) => {
      this.solution = solution;
    });

    const activator: Activator = this.route.snapshot.data['activator'];

    this.applicationForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      activator
    });
  }

  isFieldValid(field: string) {
    return this.applicationForm.get(field).touched && !this.applicationForm.get(field).valid;
  }

  onSubmit(application: Application) {
    if (this.applicationForm.valid) {
      const solutionId = this.solution.id;
      this.store.dispatch(SolutionActions.appendApplication({ solutionId: solutionId, application }));
      this.store.dispatch(SolutionActions.discardSelectedSolution());
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}
