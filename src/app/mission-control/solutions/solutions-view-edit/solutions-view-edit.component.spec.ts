import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionsViewEditComponent } from './solutions-view-edit.component';

describe('SolutionsViewEditComponent', () => {
  let component: SolutionsViewEditComponent;
  let fixture: ComponentFixture<SolutionsViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsViewEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
