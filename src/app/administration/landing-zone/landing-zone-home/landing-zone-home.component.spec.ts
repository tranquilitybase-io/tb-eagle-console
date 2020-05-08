import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneHomeComponent } from './landing-zone-home.component';
import { LandingZoneHomeGridComponent } from './landing-zone-home-grid/landing-zone-home-grid.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { LandingZoneService } from '../landing-zone.service';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

describe('LandingZoneHomeComponent', () => {
  let component: LandingZoneHomeComponent;
  let fixture: ComponentFixture<LandingZoneHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneHomeComponent, LandingZoneHomeGridComponent],
      providers: [LandingZoneService, EntityCollectionServiceElementsFactory],
      imports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatStepperModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
