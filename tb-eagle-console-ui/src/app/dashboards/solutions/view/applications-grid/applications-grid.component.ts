import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '@app/dashboards/activators/interfaces';
import { Store } from '@ngrx/store';
import { setSelectedSolution } from '../../solutions.actions';
import { Solution } from '../../interfaces';

@Component({
  selector: 'app-applications-grid',
  templateUrl: './applications-grid.component.html',
  styleUrls: ['./applications-grid.component.scss']
})
export class ApplicationsGridComponent {
  @Input() apps: Array<Application>;
  @Input() solution: Solution;

  constructor(private router: Router, private store: Store<any>) {}

  redirect() {
    this.store.dispatch(setSelectedSolution({ solution: this.solution }));
    this.router.navigateByUrl('/dashboard/activators');
  }
}
