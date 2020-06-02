import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreViewUsersComponent } from './activator-store-view-users.component';

describe('ActivatorStoreViewUsersComponent', () => {
  let component: ActivatorStoreViewUsersComponent;
  let fixture: ComponentFixture<ActivatorStoreViewUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreViewUsersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreViewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
