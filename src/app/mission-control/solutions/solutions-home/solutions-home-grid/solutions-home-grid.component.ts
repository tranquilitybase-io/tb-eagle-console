import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from '../../solutions.model';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solutions-home-grid',
  templateUrl: './solutions-home-grid.component.html',
  styleUrls: ['./solutions-home-grid.component.scss']
})
export class SolutionsHomeGridComponent {
  @Input() solutions$: Observable<Solution[]>;
  gridCols$: Observable<number>;

  constructor(private gridColsService: GridColsService, private router: Router, private route: ActivatedRoute) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  createNewSolution() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
