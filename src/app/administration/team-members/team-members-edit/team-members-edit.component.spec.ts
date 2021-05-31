import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersEditComponent } from './team-members-edit.component';

describe('TeamMembersEditComponent', () => {
  let component: TeamMembersEditComponent;
  let fixture: ComponentFixture<TeamMembersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMembersEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
