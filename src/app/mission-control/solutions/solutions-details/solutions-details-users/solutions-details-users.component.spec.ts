import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsUsersComponent } from './activator-store-details-users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

describe('ActivatorStoreDetailsUsersComponent', () => {
  let component: ActivatorStoreDetailsUsersComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDetailsUsersComponent],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDetailsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
