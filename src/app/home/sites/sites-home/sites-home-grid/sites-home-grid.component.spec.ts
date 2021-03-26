import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesHomeGridComponent } from './sites-home-grid.component';

describe('SitesHomeGridComponent', () => {
  let component: SitesHomeGridComponent;
  let fixture: ComponentFixture<SitesHomeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitesHomeGridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
