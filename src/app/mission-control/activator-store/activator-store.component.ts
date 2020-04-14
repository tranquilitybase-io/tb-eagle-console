import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectProgress } from './activator-store.reducer';
import { selectIsSelectedSolution } from '../solutions/solutions.reducer';

@Component({
  selector: 'app-activator-store',
  templateUrl: './activator-store.component.html',
  styleUrls: ['./activator-store.component.scss']
})
export class ActivatorStoreComponent implements OnInit {
  progress$: Observable<number>;
  isSelectedSolution$: Observable<boolean>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.progress$ = this.store.pipe(select(selectProgress));
    this.isSelectedSolution$ = this.store.pipe(select(selectIsSelectedSolution));
  }
}
