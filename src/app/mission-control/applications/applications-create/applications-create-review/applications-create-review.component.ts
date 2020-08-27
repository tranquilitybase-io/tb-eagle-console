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
  private wideColumnsAmount: number = 5;
  private responsiveWidth: number = 1150;
  respoWidthEnabled: boolean = false;
  columnsAmount: number;
  calculatedHeight: string;
  calculatedInternalGridHeight: string;
  constructor() {}

  ngOnInit() {
    this.statusColorMap = new Map([
      ['available', 'accent'],
      ['deprecated', 'warn']
    ]);
    this.columnsAmount = window.innerWidth <= this.responsiveWidth ? 1 : this.wideColumnsAmount;
    this.calculatedHeight = window.innerWidth <= this.responsiveWidth ? '1200px' : '700px';
    this.calculatedInternalGridHeight = window.innerWidth <= this.responsiveWidth ? '600px' : '600px';
    this.respoWidthEnabled = window.innerWidth <= this.responsiveWidth ? true : false;
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
    this.columnsAmount = $event.target.innerWidth <= this.responsiveWidth ? 1 : this.wideColumnsAmount;
    this.calculatedHeight = $event.target.innerWidth <= this.responsiveWidth ? '1200px' : '700px';
    this.calculatedInternalGridHeight = $event.target.innerWidth <= this.responsiveWidth ? '600px' : '600px';
    this.respoWidthEnabled = $event.target.innerWidth <= this.responsiveWidth ? true : false;
  }
}
