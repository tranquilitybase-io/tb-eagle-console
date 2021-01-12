import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedServicesHomeComponent } from './shared-services-home.component';
import { SharedServicesHomeGridComponent } from './shared-services-home-grid/shared-services-home-grid.component';
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
import { SharedServicesService } from '../shared-services.service';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

describe('SharedServicesHomeComponent', () => {
  let component: SharedServicesHomeComponent;
  let fixture: ComponentFixture<SharedServicesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedServicesHomeComponent, SharedServicesHomeGridComponent],
      providers: [SharedServicesService, EntityCollectionServiceElementsFactory],
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
    fixture = TestBed.createComponent(SharedServicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
