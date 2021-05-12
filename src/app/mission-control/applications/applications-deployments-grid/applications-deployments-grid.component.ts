import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Layout } from '@app/layout/layout.model';
import { LayoutService } from '@app/layout/layout.service';
import { Observable } from 'rxjs';
import { Application } from '../applications.model';

@Component({
  selector: 'app-applications-deployments-grid',
  templateUrl: './applications-deployments-grid.component.html',
  styleUrls: ['./applications-deployments-grid.component.scss'],
})
export class ApplicationsDeploymentsGridComponent implements OnInit {
  applications: Application[] = [];
  layout$: Observable<Layout>;

  constructor(private layout: LayoutService, private route: ActivatedRoute) {
    this.layout$ = this.layout.layoutObserver$;
  }

  ngOnInit() {
    this.applications = this.route.snapshot.data['applications'] as Application[];
  }
}
