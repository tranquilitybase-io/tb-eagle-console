import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatorsComponent } from './activators.component';

describe('ActivatorsComponent', () => {
  let component: ActivatorsComponent;
  let fixture: ComponentFixture<ActivatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatorsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
