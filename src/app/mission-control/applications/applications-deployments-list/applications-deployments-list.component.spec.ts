import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsDeploymentsListComponent } from './applications-deployments-list.component';

describe('ApplicationsDeploymentsListComponent', () => {
  let component: ApplicationsDeploymentsListComponent;
  let fixture: ComponentFixture<ApplicationsDeploymentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsDeploymentsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsDeploymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
