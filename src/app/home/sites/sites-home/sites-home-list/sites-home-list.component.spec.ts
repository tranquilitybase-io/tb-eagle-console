import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesHomeListComponent } from './sites-home-list.component';

describe('SitesHomeListComponent', () => {
  let component: SitesHomeListComponent;
  let fixture: ComponentFixture<SitesHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SitesHomeListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
