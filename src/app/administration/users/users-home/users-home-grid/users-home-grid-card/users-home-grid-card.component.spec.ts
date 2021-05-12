import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHomeGridCardComponent } from './users-home-grid-card.component';

describe('UsersHomeGridCardComponent', () => {
  let component: UsersHomeGridCardComponent;
  let fixture: ComponentFixture<UsersHomeGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersHomeGridCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHomeGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
