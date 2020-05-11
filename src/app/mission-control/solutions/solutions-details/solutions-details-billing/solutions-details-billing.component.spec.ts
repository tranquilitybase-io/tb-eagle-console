import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsBillingComponent } from './activator-store-details-billing.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

describe('ActivatorStoreDetailsBillingComponent', () => {
  let component: ActivatorStoreDetailsBillingComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDetailsBillingComponent],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDetailsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
