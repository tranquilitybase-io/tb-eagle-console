import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersListComponent } from './team-members-list.component';

describe('TeamMembersListComponent', () => {
  let component: TeamMembersListComponent;
  let fixture: ComponentFixture<TeamMembersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMembersListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
