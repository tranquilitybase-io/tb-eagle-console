import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsUsersComponent } from './activator-store-details-users.component';

describe('ActivatorStoreDetailsUsersComponent', () => {
  let component: ActivatorStoreDetailsUsersComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDetailsUsersComponent]
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
