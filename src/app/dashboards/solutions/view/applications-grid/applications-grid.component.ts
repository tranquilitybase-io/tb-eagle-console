import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setSelectedSolution } from '../../solutions.actions';
import { Solution, Application } from '../../solutions.model';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';

@Component({
  selector: 'app-applications-grid',
  templateUrl: './applications-grid.component.html',
  styleUrls: ['./applications-grid.component.scss']
})
export class ApplicationsGridComponent {
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
    this.router.navigateByUrl('/dashboard/activators');
  }
}
