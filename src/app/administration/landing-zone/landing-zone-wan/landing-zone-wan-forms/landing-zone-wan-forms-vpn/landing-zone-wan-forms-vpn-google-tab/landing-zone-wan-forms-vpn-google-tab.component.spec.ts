import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanFormsVpnGoogleTabComponent } from './landing-zone-wan-forms-vpn-google-tab.component';

describe('LandingZoneWanFormsVpnGoogleTabComponent', () => {
  let component: LandingZoneWanFormsVpnGoogleTabComponent;
  let fixture: ComponentFixture<LandingZoneWanFormsVpnGoogleTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanFormsVpnGoogleTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanFormsVpnGoogleTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
