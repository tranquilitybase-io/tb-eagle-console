import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { Activator, ActivatorCategory } from '@app/mission-control/activator-store/activator-store.model';
import { Observable, Subscription } from 'rxjs';
import { KeyValue } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { selectUserIsMCAdmin } from '@app/login/login.reducer';

import { setDeprecated, setLocked, requestAccess } from '@app/mission-control/activator-store/activator-store.actions';

import { ActivatorStoreDialogGrantAccessComponent } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog-grant-access/activator-store-dialog-grant-access.component';
import { ActivatorStoreDialogCreateOnboardingComponent } from '@app/mission-control/activator-store/activator-store-dialog/activator-store-dialog-create-onboarding/activator-store-dialog-create-onboarding.component';
import { selectCategories } from '@app/mission-control/activator-store/activator-store.reducer';

@Component({
  selector: 'app-activator-store-home-grid-card',
  templateUrl: './activator-store-home-grid-card.component.html',
  styleUrls: ['./activator-store-home-grid-card.component.scss'],
})
export class ActivatorStoreHomeGridCardComponent implements OnInit, OnDestroy {
  @Input() activator: Activator;
  active = false;
  userIsMCAdmin$: Observable<boolean>;
  category: string;
  subscription: Subscription;

  private statusColorMap: Map<string, string>;
  private teamList: KeyValue<string, string>[];
 

  constructor(
    private store: Store<any>,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.statusColorMap = new Map([
      ['available', 'accent'],
      ['deprecated', 'warn'],
    ]);
    this.userIsMCAdmin$ = this.store.pipe(select(selectUserIsMCAdmin));
    this.teamList = this.route.snapshot.data['teamList'];

    let categoryName = "";
    if (this.activator && this.activator.activatorMetadata && this.activator.activatorMetadata.category) {
      this.subscription = this.store.select(selectCategories).subscribe((categories: ActivatorCategory[]) => {
        let foundCategory = categories.find(c => Number(c.id) === Number(this.activator.activatorMetadata.category));
        if (foundCategory)
        {
          categoryName = foundCategory.categoryDescription;
        }
      })
    }
    this.category = categoryName;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get isAvailable(): boolean {
    return String(this.activator.status).toLowerCase() === 'available';
  }

  get isLocked(): boolean {
    return String(this.activator.status).toLowerCase() === 'locked';
  }

  get isDeprecated(): boolean {
    return String(this.activator.status).toLowerCase() === 'deprecated';
  }

  get sensitivityColor(): string {
    return String(this.activator.sensitivity).toLowerCase() === 'restricted' ? 'warn' : '';
  }

  get statusColor(): string {
    return this.statusColorMap.get(String(this.activator.status).toLowerCase());
  }

 

  get isDraft(): boolean {
    return this.activator && this.activator.status === 'Draft';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }

  setDeprecated() {
    this.store.dispatch(setDeprecated({ id: this.activator.id }));
  }

  setLocked() {
    this.store.dispatch(setLocked({ id: this.activator.id }));
  }

  grantAccess() {
    this.dialog.open(ActivatorStoreDialogGrantAccessComponent, {
      autoFocus: false,
      data: {
        activatorId: this.activator.id,
        teamList: this.teamList,
        accessRequestedBy: this.activator.accessRequestedBy,
      },
    });
  }

  requestAccess() {
    this.store.dispatch(requestAccess({ id: this.activator.id }));
  }

  get lastUpdated(): Date {
    return new Date(this.activator.lastUpdated || null);
  }

  onboard() {
    this.dialog.open(ActivatorStoreDialogCreateOnboardingComponent, {
      autoFocus: false,
      data: {
        activator: this.activator,
        redirect: false,
      },
    });
  }

  edit() {
    this.router.navigateByUrl(`/mission-control/activator-store/edit?id=${this.activator.id}`);
  }
}
