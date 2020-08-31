import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsCreateReviewComponent } from './applications-create-review.component';

describe('ApplicationsCreateReviewComponent', () => {
  let component: ApplicationsCreateReviewComponent;
  let fixture: ComponentFixture<ApplicationsCreateReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationsCreateReviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsCreateReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
