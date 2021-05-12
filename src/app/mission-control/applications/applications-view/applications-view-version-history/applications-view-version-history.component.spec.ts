import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsViewVersionHistoryComponent } from './applications-view-version-history.component';

describe('ApplicationsViewVersionHistoryComponent', () => {
  let component: ApplicationsViewVersionHistoryComponent;
  let fixture: ComponentFixture<ApplicationsViewVersionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsViewVersionHistoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsViewVersionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
