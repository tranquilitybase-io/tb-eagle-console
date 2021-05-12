import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsGridCardComponent } from './applications-grid-card.component';

describe('ApplicationsGridCardComponent', () => {
  let component: ApplicationsGridCardComponent;
  let fixture: ComponentFixture<ApplicationsGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsGridCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
