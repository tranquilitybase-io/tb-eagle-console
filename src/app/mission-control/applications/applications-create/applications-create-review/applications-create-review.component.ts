import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Activator } from '@app/mission-control/activator-store/activator-store.model';
import { Solution } from '@app/mission-control/solutions/solutions.model';

@Component({
  selector: 'app-applications-create-review',
  templateUrl: './applications-create-review.component.html',
  styleUrls: ['./applications-create-review.component.scss']
})
export class ApplicationsCreateReviewComponent implements OnInit {
  @Input() applicationFormGroup: FormGroup;
  @Input() activator: Activator;
  @Input() solution: Solution;
  @Output() onSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  get solutionId(): string {
    return this.applicationFormGroup.get('solutionId').value;
  }

  get solutionName(): string {
    return this.applicationFormGroup.get('name').value;
  }

  get solutionDescription(): string {
    return this.applicationFormGroup.get('description').value;
  }

  get solutionEnv(): string {
    return this.applicationFormGroup.get('env').value;
  }

  get solutionStatus(): string {
    return this.applicationFormGroup.get('status').value;
  }

  get activatorId(): string {
    return this.applicationFormGroup.get('activatorId').value;
  }
}
