import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreViewComponent } from './activator-store-view.component';

describe('ActivatorStoreViewComponent', () => {
  let component: ActivatorStoreViewComponent;
  let fixture: ComponentFixture<ActivatorStoreViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
