import { Component, OnInit, Input } from '@angular/core';
import { Solution, Application } from '../../solutions.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
import { setSelectedSolution } from '../../solutions.actions';

@Component({
  selector: 'app-solutions-view-app-grid',
  templateUrl: './solutions-view-app-grid.component.html',
  styleUrls: ['./solutions-view-app-grid.component.scss']
})
export class SolutionsViewAppGridComponent {
  @Input() solution: Solution;
  gridCols$: Observable<number>;

  constructor(private router: Router, private store: Store<any>, private gridColsService: GridColsService) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  get apps(): Array<Application> {
    return this.solution.applications;
  }

  createNewApplication() {
    this.store.dispatch(setSelectedSolution({ solution: this.solution }));
    this.router.navigateByUrl('/mission-control/activator-store');
  }
}
