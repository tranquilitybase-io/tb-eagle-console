import { Component, Input } from '@angular/core';
import { Activator } from '../../../activator-store/activator-store.model';
//import { Application } from '../../solutions.model';
import { ActivatedRoute } from '@angular/router';
import { Application } from '../../solutions.model';
import { ActivatorByIdResolver } from '@app/shared/resolvers/activator-by-id.resolver';
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

    // this.activator = this.route.snapshot.data['activator'];
  }

  // get activator(): Activator {
  //   return this.application ? this.application.activator : ({} as Activator);
  // }

  get sensitivityColor(): string {
    return String(this.activator ? this.activator.sensitivity : '').toLowerCase() === 'restricted'
      ? 'red'
      : 'dark-grey';
  }
}
