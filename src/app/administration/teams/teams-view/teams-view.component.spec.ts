import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsViewComponent } from './teams-view.component';

describe('TeamsViewComponent', () => {
  let component: TeamsViewComponent;
  let fixture: ComponentFixture<TeamsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
