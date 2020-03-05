import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorsGridComponent } from './activators-grid.component';

describe('ActivatorsGridComponent', () => {
  let component: ActivatorsGridComponent;
  let fixture: ComponentFixture<ActivatorsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorsGridComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
