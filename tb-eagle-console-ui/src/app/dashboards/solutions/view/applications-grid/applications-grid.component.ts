import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setSelectedSolution } from '../../solutions.actions';
import { Solution, Application } from '../../interfaces';

@Component({
  selector: 'app-applications-grid',
  templateUrl: './applications-grid.component.html',
  styleUrls: ['./applications-grid.component.scss']
})
export class ApplicationsGridComponent {
  @Input() solution: Solution;

  constructor(private router: Router, private store: Store<any>) {}

  get apps(): Array<Application> {
    return this.solution.applications;
  }

  redirect() {
    this.store.dispatch(setSelectedSolution({ solution: this.solution }));
    this.router.navigateByUrl('/dashboard/activators');
  }
}
