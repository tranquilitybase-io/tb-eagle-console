import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Activator } from '@app/mission-control/activator-store/activator-store.model';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { LayoutService } from '@app/layout/layout.service';
import { Observable } from 'rxjs';
import { Layout } from '@app/layout/layout.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-applications-create-review',
  templateUrl: './applications-create-review.component.html',
  styleUrls: ['./applications-create-review.component.scss'],
})
export class ApplicationsCreateReviewComponent implements OnInit {
  @Input() applicationFormGroup: FormGroup;
  @Input() activator: Activator;
  @Input() solution: Solution;
  @Output() onSubmit = new EventEmitter();

  layout$: Observable<Layout>;
  private statusColorMap: Map<string, string>;

  constructor(private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.statusColorMap = new Map([
      ['available', 'accent'],
      ['deprecated', 'warn'],
    ]);
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

  get activatorDescription(): string {
    return this.activator && this.activator.activatorMetadata && this.activator.activatorMetadata.description;
  }

  get activatorType(): string {
    return (
      this.activator &&
      this.activator.activatorMetadata &&
      this.activator.activatorMetadata.type &&
      this.activator.activatorMetadata.type.value
    );
  }

  get rightColumnWidth$(): Observable<number> {
    return this.layout$.pipe(
      map((layout) => {
        let rightColSpan =
          layout.applicationCreationReviewGridColumnsAmount - layout.applicationCreationReviewLeftColumnSpan;
        return rightColSpan === 0 ? layout.applicationCreationReviewGridColumnsAmount : rightColSpan;
      })
    );
  }
}
