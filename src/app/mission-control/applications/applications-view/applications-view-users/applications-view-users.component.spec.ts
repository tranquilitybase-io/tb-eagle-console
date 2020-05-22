import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsViewUsersComponent } from './applications-view-users.component';

describe('ApplicationsViewUsersComponent', () => {
  let component: ApplicationsViewUsersComponent;
  let fixture: ComponentFixture<ApplicationsViewUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsViewUsersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsViewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
