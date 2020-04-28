import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionsViewEditComponent } from './solutions-view-edit.component';
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

describe('SolutionsViewEditComponent', () => {
  let component: SolutionsViewEditComponent;
  let fixture: ComponentFixture<SolutionsViewEditComponent>;
  let store: MockStore<any>;
  const initialState = true;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsViewEditComponent],
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
    fixture = TestBed.createComponent(SolutionsViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
