import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorGrantAccessDialogComponent } from './activator-grant-access-dialog.component';

describe('ActivatorGrantAccessDialogComponent', () => {
  let component: ActivatorGrantAccessDialogComponent;
  let fixture: ComponentFixture<ActivatorGrantAccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorGrantAccessDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorGrantAccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
