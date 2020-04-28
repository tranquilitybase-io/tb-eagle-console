import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeploymentsService } from '../deployments.service';
import { Application } from '@app/mission-control/solutions/solutions.model';

import { selectPage, selectLength } from '../view.reducer';
import { changePage } from '../view.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.scss']
})
export class DeploymentsComponent implements OnInit {
  deployments$: Observable<Application[]>;
  // page$: Observable<number>;
  // length$: Observable<number>;

  constructor(private deploymentService: DeploymentsService, private route: ActivatedRoute) {}

  ngOnInit() {
    const activatorId = this.route.snapshot.queryParams['id'];
    this.deployments$ = this.deploymentService.getWithQuery({ activatorId });
    // this.page$ = this.store.pipe(select(selectPage));
    // this.length$ = this.store.pipe(select(selectLength));
  }

  // onPageChange(page: number) {
  //   this.store.dispatch(changePage({ page }));
  // }
}
