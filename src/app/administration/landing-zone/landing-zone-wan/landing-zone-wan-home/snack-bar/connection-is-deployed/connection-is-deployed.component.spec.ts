import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionIsDeployedComponent } from './connection-is-deployed.component';

describe('ConnectionIsDeployedComponent', () => {
  let component: ConnectionIsDeployedComponent;
  let fixture: ComponentFixture<ConnectionIsDeployedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionIsDeployedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionIsDeployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
