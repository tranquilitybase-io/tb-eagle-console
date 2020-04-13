import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreHomeGridCardComponent } from './activator-store-home-grid-card.component';

describe('ActivatorStoreHomeGridCardComponent', () => {
  let component: ActivatorStoreHomeGridCardComponent;
  let fixture: ComponentFixture<ActivatorStoreHomeGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreHomeGridCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreHomeGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
