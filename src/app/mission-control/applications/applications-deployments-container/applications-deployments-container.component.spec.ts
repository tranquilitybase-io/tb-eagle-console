import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsDeploymentsContainerComponent } from './applications-deployments-container.component';

describe('ApplicationsDeploymentsContainerComponent', () => {
  let component: ApplicationsDeploymentsContainerComponent;
  let fixture: ComponentFixture<ApplicationsDeploymentsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsDeploymentsContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsDeploymentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
