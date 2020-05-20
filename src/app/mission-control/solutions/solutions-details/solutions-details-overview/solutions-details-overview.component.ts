import { Component } from '@angular/core';
import { Activator } from '../../../activator-store/activator-store.model';
import { ActivatedRoute } from '@angular/router';
import { Application } from '@app/mission-control/applications/applications.model';
import { ActivatorStoreService } from '@app/mission-control/activator-store/activator-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solutions-details-overview',
  templateUrl: './solutions-details-overview.component.html',
  styleUrls: ['./solutions-details-overview.component.scss']
})
export class SolutionsDetailsOverviewComponent {
  application: Application;
  activator$: Observable<Activator>;
  activator: Activator;

  constructor(private route: ActivatedRoute, private activatorStoreService: ActivatorStoreService) {}

  ngOnInit() {
    this.application = this.route.snapshot.data['application'] as Application;
    this.activator$ = this.activatorStoreService.getByKey(this.application.activatorId);
    this.activator$.subscribe(activator => (this.activator = activator));
  }

  get sensitivityColor(): string {
    return String(this.activator ? this.activator.sensitivity : '').toLowerCase() === 'restricted'
      ? 'red'
      : 'dark-grey';
  }
}
