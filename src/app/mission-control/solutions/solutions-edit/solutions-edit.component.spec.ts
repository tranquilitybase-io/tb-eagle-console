import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionsEditComponent } from './solutions-edit.component';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatOptionModule,
  MatListModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SolutionsEditComponent', () => {
  let component: SolutionsEditComponent;
  let fixture: ComponentFixture<SolutionsEditComponent>;
  let store: MockStore<any>;
  const initialState = true;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsEditComponent],
      imports: [
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatListModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
