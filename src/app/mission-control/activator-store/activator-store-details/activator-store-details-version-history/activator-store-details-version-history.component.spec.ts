import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsVersionHistoryComponent } from './activator-store-details-version-history.component';

describe('ActivatorStoreDetailsVersionHistoryComponent', () => {
  let component: ActivatorStoreDetailsVersionHistoryComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsVersionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDetailsVersionHistoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDetailsVersionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
