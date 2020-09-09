import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHomeSelectComponent } from './users-home-select.component';

describe('UsersHomeSelectComponent', () => {
  let component: UsersHomeSelectComponent;
  let fixture: ComponentFixture<UsersHomeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersHomeSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHomeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
