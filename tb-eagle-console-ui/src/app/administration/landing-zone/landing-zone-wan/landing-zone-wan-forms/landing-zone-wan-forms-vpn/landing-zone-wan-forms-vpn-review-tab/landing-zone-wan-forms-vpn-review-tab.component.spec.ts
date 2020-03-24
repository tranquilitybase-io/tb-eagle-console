import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanFormsVpnReviewTabComponent } from './landing-zone-wan-forms-vpn-review-tab.component';

describe('LandingZoneWanFormsVpnReviewTabComponent', () => {
  let component: LandingZoneWanFormsVpnReviewTabComponent;
  let fixture: ComponentFixture<LandingZoneWanFormsVpnReviewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanFormsVpnReviewTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanFormsVpnReviewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
