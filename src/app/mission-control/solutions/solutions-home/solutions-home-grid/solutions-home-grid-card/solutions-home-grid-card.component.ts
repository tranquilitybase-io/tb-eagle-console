import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectInProgress, selectProgress } from '@app/mission-control/solutions/solutions.reducer';
import { startDeployment } from '@app/mission-control/solutions/solutions.actions';

@Component({
  selector: 'app-solutions-home-grid-card',
  templateUrl: './solutions-home-grid-card.component.html',
  styleUrls: ['./solutions-home-grid-card.component.scss']
})
export class SolutionsHomeGridCardComponent implements OnInit {
  @Input() solution: Solution;

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
