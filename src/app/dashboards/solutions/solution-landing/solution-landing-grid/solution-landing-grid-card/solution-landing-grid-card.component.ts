import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Solution } from '@app/dashboards/solutions/solutions.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectInProgress, selectProgress } from '@app/dashboards/solutions/solutions.reducers';
import { startDeployment } from '@app/dashboards/solutions/solutions.actions';
import { SolutionUnderCreationComponent } from '@app/dashboards/solutions/snack-bar/solution-under-creation/solution-under-creation.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-solution-landing-grid-card',
  templateUrl: './solution-landing-grid-card.component.html',
  styleUrls: ['./solution-landing-grid-card.component.scss']
})
export class SolutionLandingGridCardComponent implements OnInit {
  @Input() solution: Solution;

  active = false;

  deploymentInProgress$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>, private snackBar: MatSnackBar) {}

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
    this.snackBar.openFromComponent(SolutionUnderCreationComponent);
    this.store.dispatch(startDeployment({ name: String(this.solution.id) }));
  }
}
