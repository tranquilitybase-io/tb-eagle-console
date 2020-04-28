import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreCreateAppComponent } from './activator-store-create-app.component';

describe('ActivatorStoreCreateAppComponent', () => {
  let component: ActivatorStoreCreateAppComponent;
  let fixture: ComponentFixture<ActivatorStoreCreateAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreCreateAppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreCreateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
