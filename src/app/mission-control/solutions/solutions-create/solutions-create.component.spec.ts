import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsCreateComponent } from './solutions-create.component';

describe('SolutionsCreateComponent', () => {
  let component: SolutionsCreateComponent;
  let fixture: ComponentFixture<SolutionsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsCreateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
