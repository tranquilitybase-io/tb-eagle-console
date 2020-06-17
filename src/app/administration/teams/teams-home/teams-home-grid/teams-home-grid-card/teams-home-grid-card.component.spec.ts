import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsHomeGridCardComponent } from './teams-home-grid-card.component';

describe('TeamsHomeGridCardComponent', () => {
  let component: TeamsHomeGridCardComponent;
  let fixture: ComponentFixture<TeamsHomeGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsHomeGridCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsHomeGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
