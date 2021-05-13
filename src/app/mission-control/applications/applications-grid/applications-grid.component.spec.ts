import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsGridComponent } from './applications-grid.component';

describe('ApplicationsGridComponent', () => {
  let component: ApplicationsGridComponent;
  let fixture: ComponentFixture<ApplicationsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
