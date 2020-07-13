import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsViewTeamMembersComponent } from './teams-view-team-members.component';

describe('TeamsViewTeamMembersComponent', () => {
  let component: TeamsViewTeamMembersComponent;
  let fixture: ComponentFixture<TeamsViewTeamMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsViewTeamMembersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsViewTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
