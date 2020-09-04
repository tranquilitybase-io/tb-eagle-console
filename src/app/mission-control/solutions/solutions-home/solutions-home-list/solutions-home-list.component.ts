import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from '../../solutions.model';
import { Layout } from '@app/shared/layout/layout.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar, Sort } from '@angular/material';
import { Store } from '@ngrx/store';
import { SolutionUnderCreationComponent } from '@app/shared/snack-bar/solution-under-creation/solution-under-creation.component';
import { startDeployment } from '@app/mission-control/applications/applications.actions';
import { DeploymentState } from '@app/shared/shared.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solutions-home-list',
  templateUrl: './solutions-home-list.component.html',
  styleUrls: ['./solutions-home-list.component.scss']
})
export class SolutionsHomeListComponent implements OnInit {
  @Input() solutions$: Observable<Solution[]>;
  layout$: Observable<Layout>;

  displayedColumns: string[] = ['id', 'name', 'status', 'appCount', 'team', 'lastUpdated', 'description', 'actions'];
  dataSource: MatTableDataSource<Solution>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private layoutService: LayoutService,
    private store: Store<any>,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.solutions$.subscribe(solutions => {
      this.dataSource = new MatTableDataSource(solutions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deployAction(_id: number) {
    this.snackBar.openFromComponent(SolutionUnderCreationComponent);
    this.store.dispatch(startDeployment({ id: _id }));
  }

  isDeploymentInProgress(deploymentState: DeploymentState): boolean {
    return (
      deploymentState === DeploymentState.Pending ||
      deploymentState === DeploymentState.Started ||
      deploymentState === DeploymentState.Retry
    );
  }

  isDeploymentStateSuccess(deploymentState: DeploymentState): boolean {
    return deploymentState === DeploymentState.Success;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createNewSolution() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  sortData(sort: Sort) {
    // const data = this.desserts.slice();
    // if (!sort.active || sort.direction === '') {
    //   this.sortedData = data;
    //   return;
    // }
    // this.sortedData = data.sort((a, b) => {
    //   const isAsc = sort.direction === 'asc';
    //   switch (sort.active) {
    //     case 'name': return this.compare(a.name, b.name, isAsc);
    //     case 'calories': return this.compare(a.calories, b.calories, isAsc);
    //     case 'fat': return this.compare(a.fat, b.fat, isAsc);
    //     case 'carbs': return this.compare(a.carbs, b.carbs, isAsc);
    //     case 'protein': return this.compare(a.protein, b.protein, isAsc);
    //     default: return 0;
    //   }
    // });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
