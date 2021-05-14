import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDialogCreateComponent } from './activator-store-dialog-create.component';

describe('ActivatorStoreDialogGrantAccessComponent', () => {
  let component: ActivatorStoreDialogCreateComponent;
  let fixture: ComponentFixture<ActivatorStoreDialogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDialogCreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
