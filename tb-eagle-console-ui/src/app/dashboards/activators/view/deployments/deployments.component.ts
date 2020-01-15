import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeploymentsService } from '@app/dashboards/activators/deployments.service';
import { Deployment } from '@app/dashboards/activators/interfaces';

import { selectPage } from '../view.reducer';
import { changePage } from '../view.actions';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.scss']
})
export class DeploymentsComponent implements OnInit {
  deployments$: Observable<Deployment[]>;
  page$: Observable<number>;

  constructor(
    private deploymentService: DeploymentsService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.deployments$ = this.deploymentService.entities$;
    this.page$ = this.store.pipe(
      select(selectPage)
    );
  }

  onPageChange(page: number) {
    this.store.dispatch(changePage({ page }));
  }
}
