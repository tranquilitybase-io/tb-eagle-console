import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsDeploymentsGridComponent } from './applications-deployments-grid.component';

describe('ApplicationsDeploymentsGridComponent', () => {
  let component: ApplicationsDeploymentsGridComponent;
  let fixture: ComponentFixture<ApplicationsDeploymentsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsDeploymentsGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsDeploymentsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
