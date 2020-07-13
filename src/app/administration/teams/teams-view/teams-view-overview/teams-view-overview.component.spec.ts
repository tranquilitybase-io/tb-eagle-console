import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsViewOverviewComponent } from './teams-view-overview.component';

describe('TeamsViewOverviewComponent', () => {
  let component: TeamsViewOverviewComponent;
  let fixture: ComponentFixture<TeamsViewOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsViewOverviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsViewOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
