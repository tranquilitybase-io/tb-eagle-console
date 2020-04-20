import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreComponent } from './activator-store.component';

describe('ActivatorStoreComponent', () => {
  let component: ActivatorStoreComponent;
  let fixture: ComponentFixture<ActivatorStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
