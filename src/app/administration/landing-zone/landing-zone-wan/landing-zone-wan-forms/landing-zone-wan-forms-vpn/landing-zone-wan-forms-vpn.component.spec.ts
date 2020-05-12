import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanFormsVpnComponent } from './landing-zone-wan-forms-vpn.component';
import { LandingZoneWanFormsVpnReviewTabComponent } from './landing-zone-wan-forms-vpn-review-tab/landing-zone-wan-forms-vpn-review-tab.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LandingZoneWanFormsVpnTabComponent } from './landing-zone-wan-forms-vpn-tab/landing-zone-wan-forms-vpn-tab.component';
import { LandingZoneWanFormsVpnGoogleTabComponent } from './landing-zone-wan-forms-vpn-google-tab/landing-zone-wan-forms-vpn-google-tab.component';
import { LandingZoneWanFormsVpnOnPremiseTabComponent } from './landing-zone-wan-forms-vpn-on-premise-tab/landing-zone-wan-forms-vpn-on-premise-tab.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingZoneWanFormsVpnComponent', () => {
  let component: LandingZoneWanFormsVpnComponent;
  let fixture: ComponentFixture<LandingZoneWanFormsVpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LandingZoneWanFormsVpnComponent,
        LandingZoneWanFormsVpnGoogleTabComponent,
        LandingZoneWanFormsVpnOnPremiseTabComponent,
        LandingZoneWanFormsVpnReviewTabComponent,
        LandingZoneWanFormsVpnTabComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatStepperModule,
        MatTooltipModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanFormsVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
