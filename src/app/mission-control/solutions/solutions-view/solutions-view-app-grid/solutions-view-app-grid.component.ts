import { Component, OnInit, Input } from '@angular/core';
import { Solution, Application } from '../../solutions.model';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setSelectedSolution } from '../../solutions.actions';

@Component({
  selector: 'app-solutions-view-app-grid',
  templateUrl: './solutions-view-app-grid.component.html',
  styleUrls: ['./solutions-view-app-grid.component.scss']
})
export class SolutionsViewAppGridComponent {
  @Input() solution: Solution;
  layout$: Observable<Layout>;

  constructor(private router: Router, private store: Store<any>, private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  get apps(): Array<Application> {
    return this.solution.applications;
  }

  createNewApplication() {
    this.store.dispatch(setSelectedSolution({ solution: this.solution }));
    this.router.navigateByUrl('/mission-control/activator-store');
  }
}
