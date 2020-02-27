import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as SolutionActions from '@app/dashboards/solutions/solutions.actions';
import { selectSelectedSolution } from '@app/dashboards/solutions/solutions.reducers';
import { Solution, Application } from '@app/dashboards/solutions/interfaces';
import { Activator } from '../../interfaces';
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';
import { SolutionsService } from '@app/dashboards/solutions/solutions.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  applicationForm: FormGroup;
  availableSolutions$: Observable<KeyValue<string, string>[]>;
  selectedSolution$: Observable<Solution>;
  selectedSolutionID: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private solutionsService: SolutionsService,
    private store: Store<any>
  ) {
    this.availableSolutions$ = solutionsService.filteredEntities$.pipe(
      map(filteredSolutions => filteredSolutions.map(solution => ({ key: String(solution.id), value: solution.name })))
    );
  }

  ngOnInit() {
    this.solutionsService.setFilter('Active');
    this.solutionsService.getAll();

    const activator = this.route.snapshot.data['activator'] as Activator;

    this.applicationForm = this.formBuilder.group({
      solutionId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      activator
    });

    this.selectedSolution$ = this.store.pipe(select(selectSelectedSolution));
    this.selectedSolution$.subscribe((solution: Solution) => {
      if (solution) {
        this.applicationForm.controls['solutionId'].setValue(String(solution.id));
      }
    });
  }

  isFieldValid(field: string) {
    return this.applicationForm.get(field).touched && !this.applicationForm.get(field).valid;
  }

  onSubmit(application: Application) {
    if (this.applicationForm.valid) {
      this.store.dispatch(SolutionActions.appendApplication({ application }));
      this.store.dispatch(SolutionActions.discardSelectedSolution());
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}
