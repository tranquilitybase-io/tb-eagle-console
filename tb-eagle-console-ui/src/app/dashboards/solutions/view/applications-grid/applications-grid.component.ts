import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setSelectedSolution } from '../../solutions.actions';
import { Solution, Application } from '../../solutions.model';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';

@Component({
  selector: 'app-applications-grid',
  templateUrl: './applications-grid.component.html',
  styleUrls: ['./applications-grid.component.scss']
})
export class ApplicationsGridComponent {
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
    this.router.navigateByUrl('/dashboard/activators');
  }
}
