import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsHomeListComponent } from './teams-home-list.component';

describe('TeamsHomeListComponent', () => {
  let component: TeamsHomeListComponent;
  let fixture: ComponentFixture<TeamsHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsHomeListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
