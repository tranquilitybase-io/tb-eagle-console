import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from '../../solutions.model';
import { Layout } from '@app/layout/layout.model';
import { LayoutService } from '@app/layout/layout.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeploymentState } from '@app/shared/shared.model';

import { MatDialog } from '@angular/material/dialog';
import { SolutionsHomeDialogDeployComponent } from '../solutions-home-dialog/solutions-home-dialog-deploy/solutions-home-dialog-deploy.component';
import { Store } from '@ngrx/store';
import { toggleFavorites } from '../../solutions.actions';
import { selectPendingFavoritesId } from '../../solutions.reducer';

@Component({
  selector: 'app-solutions-home-list',
  templateUrl: './solutions-home-list.component.html',
  styleUrls: ['./solutions-home-list.component.scss']
})
export class SolutionsHomeListComponent implements OnInit, OnChanges {
  @Input() solutions$: Observable<Solution[]>;
  @Input() isLoading: boolean;
  layout$: Observable<Layout>;
  pendingFavouritesId: number[];

  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'deploymentState',
    'workspace',
    'applications',
    'team',
    'lastUpdated',
    'description',
    'actions'
  ];
  dataSource: MatTableDataSource<Solution>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog, private layoutService: LayoutService, private store: Store<any>) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.store.select(selectPendingFavoritesId).subscribe(pendingList => {
      this.pendingFavouritesId = pendingList;
    });
  }

  ngOnChanges(changes) {
    if (changes['solutions$'] && this.solutions$) {
      this.solutions$.subscribe(solutions => {
        this.dataSource = new MatTableDataSource(solutions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  deployAction(solution: Solution) {
    this.dialog.open(SolutionsHomeDialogDeployComponent, { disableClose: true, autoFocus: false, data: solution });
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

  deploymentStateColor(deploymentState: DeploymentState): string {
    switch (deploymentState) {
      case DeploymentState.Failure:
        return 'warn';
      case DeploymentState.Pending:
      case DeploymentState.Started:
      case DeploymentState.Retry:
        return 'primary';
      case DeploymentState.Removed:
      case DeploymentState.Revoked:
        return '';
      case DeploymentState.Success:
        return 'accent';
    }
  }

  toggleFavorites(solutionId, isFavourite) {
    this.store.dispatch(toggleFavorites({ solutionId, isFavourite: !isFavourite }));
  }

  isFavouriteLoading(solutionId) {
    const selectedId = this.pendingFavouritesId.find(favId => favId === solutionId);
    return selectedId ? true : false;
  }
}
