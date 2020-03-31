import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUnderDeploymentComponent } from './app-under-deployment.component';

describe('AppUnderDeploymentComponent', () => {
  let component: AppUnderDeploymentComponent;
  let fixture: ComponentFixture<AppUnderDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppUnderDeploymentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUnderDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
