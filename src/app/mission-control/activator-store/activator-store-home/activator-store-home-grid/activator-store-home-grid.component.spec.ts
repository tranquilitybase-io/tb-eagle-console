import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreHomeGridComponent } from './activator-store-home-grid.component';

describe('ActivatorStoreHomeGridComponent', () => {
  let component: ActivatorStoreHomeGridComponent;
  let fixture: ComponentFixture<ActivatorStoreHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreHomeGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
