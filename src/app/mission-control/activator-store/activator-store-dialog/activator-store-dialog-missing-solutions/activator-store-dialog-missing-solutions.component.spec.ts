import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDialogMissingSolutionsComponent } from './activator-store-dialog-missing-solutions.component';

describe('ActivatorStoreDialogMissingSolutionsComponent', () => {
  let component: ActivatorStoreDialogMissingSolutionsComponent;
  let fixture: ComponentFixture<ActivatorStoreDialogMissingSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDialogMissingSolutionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDialogMissingSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
