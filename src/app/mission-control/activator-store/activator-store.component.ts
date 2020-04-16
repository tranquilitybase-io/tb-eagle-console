import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectProgress } from './activator-store.reducer';
import { selectIsSelectedSolution } from '../solutions/solutions.reducer';
import { discardSelectedSolution } from '../solutions/solutions.actions';

@Component({
  selector: 'app-activator-store',
  templateUrl: './activator-store.component.html',
  styleUrls: ['./activator-store.component.scss']
})
export class ActivatorStoreComponent implements OnInit, OnDestroy {
  progress$: Observable<number>;
  isSelectedSolution$: Observable<boolean>;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.progress$ = this.store.pipe(select(selectProgress));
    this.isSelectedSolution$ = this.store.pipe(select(selectIsSelectedSolution));
  }

  ngOnDestroy(): void {
    this.store.dispatch(discardSelectedSolution());
  }

  cancel() {
    this.router.navigateByUrl('/mission-control/solutions');
  }
}
