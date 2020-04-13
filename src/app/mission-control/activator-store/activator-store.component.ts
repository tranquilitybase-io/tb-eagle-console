import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectProgress } from './activator-store.reducer';

@Component({
  selector: 'app-activator-store',
  templateUrl: './activator-store.component.html',
  styleUrls: ['./activator-store.component.scss']
})
export class ActivatorStoreComponent implements OnInit {
  progress$: Observable<number>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.progress$ = this.store.pipe(select(selectProgress));
  }
}
