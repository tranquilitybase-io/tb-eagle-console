import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreViewOverviewComponent } from './activator-store-view-overview.component';

describe('ActivatorStoreViewComponent', () => {
  let component: ActivatorStoreViewOverviewComponent;
  let fixture: ComponentFixture<ActivatorStoreViewOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreViewOverviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreViewOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
