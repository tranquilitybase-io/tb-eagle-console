import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersContainerComponent } from './team-members-container.component';

describe('TeamMembersContainerComponent', () => {
  let component: TeamMembersContainerComponent;
  let fixture: ComponentFixture<TeamMembersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMembersContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
