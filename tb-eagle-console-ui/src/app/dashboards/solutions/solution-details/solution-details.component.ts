import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Solution } from '../solutions.model';
import { selectProgress, selectInProgress } from '../solutions.reducers';
import { startDeployment } from '../solutions.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-solution-details',
  templateUrl: './solution-details.component.html',
  styleUrls: ['./solution-details.component.scss']
})
export class SolutionDetailsComponent implements OnInit {
  @Input('solution') solution: Solution;
  active = false;
  deploymentInProgress$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.deploymentInProgress$ = this.store.pipe(select(selectInProgress(this.solution.id.toString())));
    this.percentage$ = this.store.pipe(select(selectProgress(this.solution.id.toString())));
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }

  deploy() {
    this.store.dispatch(startDeployment({ name: String(this.solution.id) }));
  }
}
