import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneHomeGridComponent } from './landing-zone-home-grid.component';

describe('LandingZoneHomeGridComponent', () => {
  let component: LandingZoneHomeGridComponent;
  let fixture: ComponentFixture<LandingZoneHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneHomeGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
