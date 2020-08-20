import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchesComponent } from './switches.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SwitchesComponent', () => {
  let component: SwitchesComponent;
  let fixture: ComponentFixture<SwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchesComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: of({ groupSwitch: 'Actives' })
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
