import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanViewComponent } from './landing-zone-wan-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatGridListModule, MatCardModule, MatChipsModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('LandingZoneWanViewComponent', () => {
  let component: LandingZoneWanViewComponent;
  let fixture: ComponentFixture<LandingZoneWanViewComponent>;
  let store: MockStore<any>;
  const initialState = true;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanViewComponent],
      imports: [
        RouterTestingModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatChipsModule,
        MatListModule
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
