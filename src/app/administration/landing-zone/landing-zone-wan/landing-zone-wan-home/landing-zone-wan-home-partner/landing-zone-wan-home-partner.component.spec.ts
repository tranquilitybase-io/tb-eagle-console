import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanHomePartnerComponent } from './landing-zone-wan-home-partner.component';

describe('LandingZoneWanHomePartnerComponent', () => {
  let component: LandingZoneWanHomePartnerComponent;
  let fixture: ComponentFixture<LandingZoneWanHomePartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanHomePartnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanHomePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
