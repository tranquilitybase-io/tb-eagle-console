import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanFormsVpnOnPremiseTabComponent } from './landing-zone-wan-forms-vpn-on-premise-tab.component';

describe('LandingZoneWanFormsVpnOnPremiseTabComponent', () => {
  let component: LandingZoneWanFormsVpnOnPremiseTabComponent;
  let fixture: ComponentFixture<LandingZoneWanFormsVpnOnPremiseTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanFormsVpnOnPremiseTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanFormsVpnOnPremiseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
