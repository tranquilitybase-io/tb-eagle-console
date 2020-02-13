import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectProgress } from '../activators.reducer';
import { selectIsAlmostReady, selectIsDeploymentReady, AllState } from '../all/all.reducer';
import { dismissAlmostReadyAlert, dismissDeploymentReadyAlert } from '../all/all.actions';

@Component({
  selector: 'app-activators',
  templateUrl: './activators.component.html',
  styleUrls: ['./activators.component.scss']
})
export class ActivatorsComponent implements OnInit {
  progress$: Observable<number>;
  isAlmostReady$: Observable<boolean>;
  isReady$: Observable<boolean>;

  constructor(private store: Store<any>, private storeAll: Store<AllState>) {}

  ngOnInit() {
    this.progress$ = this.store.pipe(select(selectProgress));
    this.isAlmostReady$ = this.store.pipe(select(selectIsAlmostReady));
    this.isReady$ = this.store.pipe(select(selectIsDeploymentReady));
  }

  public DismissAlmostReady() {
    this.storeAll.dispatch(dismissAlmostReadyAlert());
  }

  public DismissReady() {
    this.storeAll.dispatch(dismissDeploymentReadyAlert());
  }
}
