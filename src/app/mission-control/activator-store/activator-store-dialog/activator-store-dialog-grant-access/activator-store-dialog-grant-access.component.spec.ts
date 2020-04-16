import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorStoreDialogGrantAccessComponent } from './activator-store-dialog-grant-access.component';

describe('ActivatorStoreDialogGrantAccessComponent', () => {
  let component: ActivatorStoreDialogGrantAccessComponent;
  let fixture: ComponentFixture<ActivatorStoreDialogGrantAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorStoreDialogGrantAccessComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorStoreDialogGrantAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
