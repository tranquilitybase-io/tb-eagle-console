import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { setProgress } from '../../activators.actions';

@Component({
  selector: 'app-set-progress-on-init',
  templateUrl: './set-progress-on-init.component.html',
  styleUrls: ['./set-progress-on-init.component.scss']
})
export class SetProgressOnInitComponent implements OnInit {
  @Input() step: number;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(setProgress({ step: this.step }));
  }
}
