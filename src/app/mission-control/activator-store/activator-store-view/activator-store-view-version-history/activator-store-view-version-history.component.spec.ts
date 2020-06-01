import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreViewVersionHistoryComponent } from './activator-store-view-version-history.component';

describe('ActivatorStoreViewVersionHistoryComponent', () => {
  let component: ActivatorStoreViewVersionHistoryComponent;
  let fixture: ComponentFixture<ActivatorStoreViewVersionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreViewVersionHistoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreViewVersionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
