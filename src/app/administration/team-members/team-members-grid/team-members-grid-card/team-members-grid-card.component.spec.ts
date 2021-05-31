import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersGridCardComponent } from './team-members-grid-card.component';

describe('TeamMembersGridCardComponent', () => {
  let component: TeamMembersGridCardComponent;
  let fixture: ComponentFixture<TeamMembersGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMembersGridCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
