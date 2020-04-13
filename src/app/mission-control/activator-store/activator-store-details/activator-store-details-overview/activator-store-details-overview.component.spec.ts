import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsOverviewComponent } from './activator-store-details-overview.component';

describe('ActivatorStoreDetailsOverviewComponent', () => {
  let component: ActivatorStoreDetailsOverviewComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDetailsOverviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
