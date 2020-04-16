import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsViewWorkspaceInfoComponent } from './solutions-view-workspace-info.component';

describe('SolutionsViewWorkspaceInfoComponent', () => {
  let component: SolutionsViewWorkspaceInfoComponent;
  let fixture: ComponentFixture<SolutionsViewWorkspaceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsViewWorkspaceInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsViewWorkspaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
