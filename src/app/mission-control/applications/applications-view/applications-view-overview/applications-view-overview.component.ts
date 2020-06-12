import { Component, OnInit } from '@angular/core';
import { Application } from '../../applications.model';
import { Activator } from '@app/mission-control/activator-store/activator-store.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applications-view-overview',
  templateUrl: './applications-view-overview.component.html',
  styleUrls: ['./applications-view-overview.component.scss']
})
export class ApplicationsViewOverviewComponent implements OnInit {
  application: Application;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.application = this.route.snapshot.data['application'] as Application;
  }

  get activator(): Activator {
    return this.application ? this.application.activator : ({} as Activator);
  }

  get sensitivityColor(): string {
    return String(this.activator ? this.activator.sensitivity : '').toLowerCase() === 'restricted'
      ? 'red'
      : 'dark-grey';
  }
}
