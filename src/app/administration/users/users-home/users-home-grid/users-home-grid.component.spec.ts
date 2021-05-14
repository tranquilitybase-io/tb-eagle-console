import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHomeGridComponent } from './users-home-grid.component';

describe('UsersHomeGridComponent', () => {
  let component: UsersHomeGridComponent;
  let fixture: ComponentFixture<UsersHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersHomeGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
