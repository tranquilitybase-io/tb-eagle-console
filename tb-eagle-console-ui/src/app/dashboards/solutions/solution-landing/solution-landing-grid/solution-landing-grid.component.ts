import { Component, OnInit, Input } from '@angular/core';
import { Solution } from '../../solutions.model';
import { Observable } from 'rxjs';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solution-landing-grid',
  templateUrl: './solution-landing-grid.component.html',
  styleUrls: ['./solution-landing-grid.component.scss']
})
export class SolutionLandingGridComponent implements OnInit {
  @Input() solutions$: Observable<Solution[]>;
  gridCols$: Observable<number>;

  constructor(private gridColsService: GridColsService, private router: Router) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  ngOnInit() {}

  createNewSolution() {
    this.router.navigateByUrl('/dashboard/solutions/create');
  }
}
