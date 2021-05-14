import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout } from '@app/layout/layout.model';
import { LayoutService } from '@app/layout/layout.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Activator } from '../../activator-store.model';
import { setDeprecated, setLocked, requestAccess, getActivators } from '../../activator-store.actions';
import { selectActivators, selectGetActivatorsStatus } from '../../activator-store.reducer';
import { selectUserIsMCAdmin } from '@app/login/login.reducer';
import { ActivatorStoreDialogGrantAccessComponent } from '../../activator-store-dialog/activator-store-dialog-grant-access/activator-store-dialog-grant-access.component';
import { KeyValue } from '@angular/common';
import { Loadable } from '@app/shared/shared.reducer';
import { ActivatorStoreDialogCreateOnboardingComponent } from '../../activator-store-dialog/activator-store-dialog-create-onboarding/activator-store-dialog-create-onboarding.component';

@Component({
  selector: 'app-activator-store-home-list',
  templateUrl: './activator-store-home-list.component.html',
  styleUrls: ['./activator-store-home-list.component.scss'],
})
export class ActivatorStoreHomeListComponent implements OnInit {
  activators$: Observable<Activator[]> = this.store.select(selectActivators);
  getByActivatorsStatus$: Observable<Loadable> = this.store.select(selectGetActivatorsStatus);
  layout$: Observable<Layout>;
  private statusColorMap: Map<string, string>;
  private teamList: KeyValue<string, string>[];

  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'category',
    'type',
    'sensitivity',
    'environments',
    'cloudPlatforms',
    'lastUpdated',
    'description',
    'actions',
  ];
  dataSource: MatTableDataSource<Activator>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  userIsMCAdmin$: Observable<boolean>;

  constructor(
    private layoutService: LayoutService,
    private store: Store<any>,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.layout$ = this.layoutService.layoutObserver$;
    this.statusColorMap = new Map([
      ['available', 'accent'],
      ['deprecated', 'warn'],
    ]);
  }

  ngOnInit() {
    this.activators$.subscribe((activators) => {
      this.dataSource = new MatTableDataSource(activators);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.userIsMCAdmin$ = this.store.pipe(select(selectUserIsMCAdmin));
    this.teamList = this.route.snapshot.data['teamList'];
  }

  sensitivityColor(sensitivity: string): string {
    return sensitivity && sensitivity.toLowerCase() === 'restricted' ? 'warn' : '';
  }

  statusColor(status: string): string {
    return this.statusColorMap.get(String(status).toLowerCase());
  }

  isAvailable(status: string): boolean {
    return status.toLowerCase() === 'available';
  }

  isLocked(status: string): boolean {
    return status.toLowerCase() === 'locked';
  }

  isDeprecated(status: string): boolean {
    return status.toLowerCase() === 'deprecated';
  }

  setDeprecated(_id: number) {
    this.store.dispatch(setDeprecated({ id: _id }));
  }

  setLocked(_id: number) {
    this.store.dispatch(setLocked({ id: _id }));
  }

  isDraft(status: string): boolean {
    return status === 'Draft';
  }

  grantAccess(activator: Activator) {
    this.dialog.open(ActivatorStoreDialogGrantAccessComponent, {
      autoFocus: false,
      data: {
        activatorId: activator.id,
        teamList: this.teamList,
        accessRequestedBy: activator.accessRequestedBy,
      },
    });
  }

  requestAccess(_id: number) {
    this.store.dispatch(requestAccess({ id: _id }));
  }

  actionNeeded(activator: Activator): boolean {
    if (activator.accessRequestedBy) return true;
  }

  onboard(activator: Activator) {
    this.dialog.open(ActivatorStoreDialogCreateOnboardingComponent, {
      autoFocus: false,
      data: {
        activator,
        redirect: false,
      },
    });
  }

  edit(activator) {
    this.router.navigateByUrl(`/mission-control/activator-store/edit?id=${activator.id}`);
  }
}
