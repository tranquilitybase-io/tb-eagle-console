import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDetailsComponent } from './activator-store-details.component';

describe('ActivatorStoreDetailsComponent', () => {
  let component: ActivatorStoreDetailsComponent;
  let fixture: ComponentFixture<ActivatorStoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
