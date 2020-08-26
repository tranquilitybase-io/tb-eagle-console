import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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

  private statusColorMap: Map<string, string>;
  columnsAmount: number;
  calculatedHeight: string;
  constructor() {}

  ngOnInit() {
    this.statusColorMap = new Map([
      ['available', 'accent'],
      ['deprecated', 'warn']
    ]);
    this.columnsAmount = window.innerWidth <= 1150 ? 1 : 3;
    this.calculatedHeight = window.innerWidth <= 1150 ? '1000px' : '400px';
  }

  get applicationId(): string {
    return this.applicationFormGroup.get('solutionId').value;
  }

  get applicationName(): string {
    return this.applicationFormGroup.get('name').value;
  }

  get applicationDescription(): string {
    return this.applicationFormGroup.get('description').value;
  }

  get applicationEnv(): string {
    return this.applicationFormGroup.get('env').value;
  }

  get applicationStatus(): string {
    return this.applicationFormGroup.get('status').value;
  }

  get activatorId(): string {
    return this.applicationFormGroup.get('activatorId').value;
  }

  get sensitivityColor(): string {
    return String(this.activator.sensitivity).toLowerCase() === 'restricted' ? 'warn' : '';
  }

  get activatorStatusColor(): string {
    return this.statusColorMap.get(String(this.activator.status).toLowerCase());
  }

  get solutionIsActiveColor(): string {
    return this.solution.isActive === true ? 'accent' : '';
  }

  @HostListener('window:resize', ['$event'])
  onResize($event) {
    this.columnsAmount = $event.target.innerWidth <= 1150 ? 1 : 3;
    this.calculatedHeight = window.innerWidth <= 1150 ? '1000px' : '400px';
  }
}
