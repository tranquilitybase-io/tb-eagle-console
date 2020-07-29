import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersGridComponent } from './team-members-grid.component';

describe('TeamMembersGridComponent', () => {
  let component: TeamMembersGridComponent;
  let fixture: ComponentFixture<TeamMembersGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMembersGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
