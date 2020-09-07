import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreHomeListComponent } from './activator-store-home-list.component';

describe('ActivatorStoreHomeListComponent', () => {
  let component: ActivatorStoreHomeListComponent;
  let fixture: ComponentFixture<ActivatorStoreHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreHomeListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
