import { Component, Input } from '@angular/core';
import { Solution } from '../../solutions.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-solutions-view-overview',
  templateUrl: './solutions-view-overview.component.html',
  styleUrls: ['./solutions-view-overview.component.scss']
})
export class SolutionsViewOverviewComponent {
  @Input() solution: Solution;

  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  get solutionIsActiveColor(): string {
    return this.solution.isActive === true ? 'accent' : '';
  }

  get rightColumnWidth$(): Observable<number> {
    return this.layout$.pipe(
      map(layout => {
        let rightColSpan =
          layout.applicationCreationReviewGridColumnsAmount - layout.applicationCreationReviewLeftColumnSpan;
        return rightColSpan === 0 ? layout.applicationCreationReviewGridColumnsAmount : rightColSpan;
      })
    );
  }
}
