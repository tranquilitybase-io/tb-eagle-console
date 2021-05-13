import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsHomeGridComponent } from './teams-home-grid.component';

describe('TeamsHomeGridComponent', () => {
  let component: TeamsHomeGridComponent;
  let fixture: ComponentFixture<TeamsHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsHomeGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
