import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHomeListComponent } from './users-home-list.component';

describe('UsersHomeListComponent', () => {
  let component: UsersHomeListComponent;
  let fixture: ComponentFixture<UsersHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersHomeListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
