import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanHomeDirectComponent } from './landing-zone-wan-home-direct.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

describe('LandingZoneWanHomeDirectComponent', () => {
  let component: LandingZoneWanHomeDirectComponent;
  let fixture: ComponentFixture<LandingZoneWanHomeDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanHomeDirectComponent],
      imports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatIconModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTabsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanHomeDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
