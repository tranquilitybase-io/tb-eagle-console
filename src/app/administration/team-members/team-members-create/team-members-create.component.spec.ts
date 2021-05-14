import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersCreateComponent } from './team-members-create.component';

describe('TeamMembersCreateComponent', () => {
  let component: TeamMembersCreateComponent;
  let fixture: ComponentFixture<TeamMembersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMembersCreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
