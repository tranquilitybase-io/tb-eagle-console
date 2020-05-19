import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsDetailsUsersComponent } from './solutions-details-users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

describe('SolutionsDetailsUsersComponent', () => {
  let component: SolutionsDetailsUsersComponent;
  let fixture: ComponentFixture<SolutionsDetailsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsDetailsUsersComponent],
      imports: [MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatListModule, MatTabsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsDetailsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
