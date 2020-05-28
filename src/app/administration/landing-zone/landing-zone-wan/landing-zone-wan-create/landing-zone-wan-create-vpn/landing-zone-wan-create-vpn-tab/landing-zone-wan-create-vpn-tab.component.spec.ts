import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanCreateVpnTabComponent } from './landing-zone-wan-create-vpn-tab.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

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

describe('LandingZoneWanCreateVpnTabComponent', () => {
  let component: LandingZoneWanCreateVpnTabComponent;
  let fixture: ComponentFixture<LandingZoneWanCreateVpnTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanCreateVpnTabComponent],
      providers: [CdkStepper, ChangeDetectorRef, { provide: ActivatedRoute, useValue: { params: of({ id: 123 }) } }],
      imports: [
        ReactiveFormsModule,
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
    fixture = TestBed.createComponent(LandingZoneWanCreateVpnTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
