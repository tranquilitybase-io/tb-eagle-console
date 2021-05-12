import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsHomeComponent } from './teams-home.component';

describe('TeamsHomeComponent', () => {
  let component: TeamsHomeComponent;
  let fixture: ComponentFixture<TeamsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
