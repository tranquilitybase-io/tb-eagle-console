import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Application } from '@app/mission-control/applications/applications.model';
import { Solution } from '../../solutions.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUserIsAdmin } from '@app/login/login.reducer';
import { selectSolutionDeploymentsData } from '../../solutions.reducer';
import { SolutionsService } from '../../solutions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solutions-view-applications',
  templateUrl: './solutions-view-applications.component.html',
  styleUrls: ['./solutions-view-applications.component.scss']
})
export class SolutionsViewApplicationsComponent implements OnInit {
  @Input() solution: Solution;
  displayedColumns: string[] = [
    'name',
    'activatorName',
    'status',
    'sensitivity',
    'category',
    'environments',
    'cloudPlatforms',
    'lastUpdated',
    'description',
    'actions'
  ];
  dataSource: MatTableDataSource<Application>;
  userIsAdmin$: Observable<boolean>;
  filterValue: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private store: Store<any>, private solutionsService: SolutionsService, private route: ActivatedRoute) {
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
  }

  ngOnInit() {
    this.store.pipe(select(selectSolutionDeploymentsData)).subscribe(() => {
      this.solutionsService.getByKey(this.route.snapshot.queryParamMap.get('id')).subscribe(solution => {
        this.solution = solution;
        this.dataSource = new MatTableDataSource(this.solution.applications);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filter = this.filterValue;
      });
    });
  }

  applyFilter(filter: string) {
    this.filterValue = filter;
    this.dataSource.filter = filter;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
