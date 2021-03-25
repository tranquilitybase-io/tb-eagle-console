import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesViewComponent } from './sites-view.component';

describe('SitesViewComponent', () => {
  let component: SitesViewComponent;
  let fixture: ComponentFixture<SitesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SitesViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
