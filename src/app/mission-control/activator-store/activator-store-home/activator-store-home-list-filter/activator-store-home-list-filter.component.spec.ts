import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreHomeListFilterComponent } from './activator-store-home-list-filter.component';

describe('ActivatorStoreHomeListFilterComponent', () => {
  let component: ActivatorStoreHomeListFilterComponent;
  let fixture: ComponentFixture<ActivatorStoreHomeListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreHomeListFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreHomeListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
