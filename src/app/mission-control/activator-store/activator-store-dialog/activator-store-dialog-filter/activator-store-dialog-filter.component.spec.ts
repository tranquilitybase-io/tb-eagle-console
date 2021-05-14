import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreFilterCreateComponent } from './activator-store-dialog-filter.component';

describe('ActivatorStoreDialogGrantAccessComponent', () => {
  let component: ActivatorStoreFilterCreateComponent;
  let fixture: ComponentFixture<ActivatorStoreFilterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreFilterCreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreFilterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
