import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingAvailableSolutionsDialogComponent } from './missing-available-solutions-dialog.component';

describe('MissingAvailableSolutionsDialogComponent', () => {
  let component: MissingAvailableSolutionsDialogComponent;
  let fixture: ComponentFixture<MissingAvailableSolutionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissingAvailableSolutionsDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingAvailableSolutionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
