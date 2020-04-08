import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionUnderDeploymentComponent } from './connection-under-deployment.component';

describe('ConnectionUnderDeploymentComponent', () => {
  let component: ConnectionUnderDeploymentComponent;
  let fixture: ComponentFixture<ConnectionUnderDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionUnderDeploymentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionUnderDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
