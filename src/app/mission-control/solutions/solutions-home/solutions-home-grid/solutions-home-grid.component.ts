import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';
import { Solution } from '../../solutions.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Loadable } from '@app/shared/shared.reducer';
import { ApiCallStatusComponent } from '@app/shared/snack-bar/api-call-status/api-call-status.component';
import { selectStartDeploymentStatus } from '@app/mission-control/solutions/solutions.reducer';

@Component({
  selector: 'app-solutions-home-grid',
  templateUrl: './solutions-home-grid.component.html',
  styleUrls: ['.//solutions-home-grid.component.scss']
})
export class SolutionsHomeGridComponent implements OnInit {
  @Input() solutions$: Observable<Solution[]>;
  @Input() isLoading: boolean;
  layout$: Observable<Layout>;
  startDeploymentStatus$: Observable<Loadable>;

  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private store: Store<any>
  ) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.startDeploymentStatus$ = this.store.pipe(select(selectStartDeploymentStatus));
    this.startDeploymentStatus$.subscribe(status => {
      console.log(status);
      this.handleSubmitStatus(status);
    });
  }

  handleSubmitStatus(status: Loadable) {
    if (status.error) {
      this.snackBar.openFromComponent(ApiCallStatusComponent, {
        data: { message: 'Something went wrong. Solution has not been deployed', success: false },
        duration: 3500
      });
    }
  }

  createNewSolution() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
