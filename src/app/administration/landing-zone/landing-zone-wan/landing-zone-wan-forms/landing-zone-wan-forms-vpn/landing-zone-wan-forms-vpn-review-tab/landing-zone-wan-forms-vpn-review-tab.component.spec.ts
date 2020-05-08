import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanFormsVpnReviewTabComponent } from './landing-zone-wan-forms-vpn-review-tab.component';

import { ChangeDetectorRef } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
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

describe('LandingZoneWanFormsVpnReviewTabComponent', () => {
  let component: LandingZoneWanFormsVpnReviewTabComponent;
  let fixture: ComponentFixture<LandingZoneWanFormsVpnReviewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanFormsVpnReviewTabComponent],
      providers: [CdkStepper, ChangeDetectorRef],
      imports: [
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
    fixture = TestBed.createComponent(LandingZoneWanFormsVpnReviewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
