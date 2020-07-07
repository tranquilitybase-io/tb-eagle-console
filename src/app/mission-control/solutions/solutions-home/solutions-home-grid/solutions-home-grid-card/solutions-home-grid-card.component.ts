import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Solution } from '@app/mission-control/solutions/solutions.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectDeployed, selectInProgress, selectProgress } from '@app/mission-control/solutions/solutions.reducer';
import { startDeployment } from '@app/mission-control/solutions/solutions.actions';
import { SolutionUnderCreationComponent } from '@app/shared/snack-bar/solution-under-creation/solution-under-creation.component';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { DeploymentState } from '@app/shared/shared.model';

@Component({
  selector: 'app-solutions-home-grid-card',
  templateUrl: './solutions-home-grid-card.component.html',
  styleUrls: ['./solutions-home-grid-card.component.scss']
})
export class SolutionsHomeGridCardComponent implements OnInit {
  @Input() solution: Solution;

  active = false;

  deploymentInProgress$: Observable<boolean>;
  deployed$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.deploymentInProgress$ = this.store.pipe(select(selectInProgress(this.solution.id.toString())));
    this.deployed$ = this.store.pipe(select(selectDeployed(this.solution.id.toString())));

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

  get isDeploymentStateSuccess(): boolean {
    return this.solution.deploymentState === DeploymentState.Success;
  }
}
