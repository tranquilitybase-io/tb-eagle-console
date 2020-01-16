import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectProgress } from '../activators.reducer';

@Component({
  selector: 'app-activators',
  templateUrl: './activators.component.html',
  styleUrls: ['./activators.component.scss']
})
export class ActivatorsComponent implements OnInit {
  progress$: Observable<number>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.progress$ = this.store.pipe(select(selectProgress));
  }
}
