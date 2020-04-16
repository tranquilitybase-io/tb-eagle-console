import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreHomeComponent } from './activator-store-home.component';

describe('ActivatorStoreHomeComponent', () => {
  let component: ActivatorStoreHomeComponent;
  let fixture: ComponentFixture<ActivatorStoreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
