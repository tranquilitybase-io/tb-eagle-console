import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedServiceHomeComponent } from './shared-service-home.component';
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
import { SharedServiceService } from '../shared-service.service';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

describe('LandingZoneHomeComponent', () => {
  let component: SharedServiceHomeComponent;
  let fixture: ComponentFixture<SharedServiceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedServiceHomeComponent, SharedServiceService],
      providers: [SharedServiceService, EntityCollectionServiceElementsFactory],
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
    fixture = TestBed.createComponent(SharedServiceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
