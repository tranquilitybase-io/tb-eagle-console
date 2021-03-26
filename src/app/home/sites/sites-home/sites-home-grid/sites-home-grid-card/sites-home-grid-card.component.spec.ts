import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesHomeGridCardComponent } from './sites-home-grid-card.component';

describe('SitesHomeGridCardComponent', () => {
  let component: SitesHomeGridCardComponent;
  let fixture: ComponentFixture<SitesHomeGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitesHomeGridCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesHomeGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
