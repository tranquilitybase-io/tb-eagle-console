import { Component, Input } from '@angular/core';
import { Activator } from '../../activator-store.model';

@Component({
  selector: 'app-activator-store-details-overview',
  templateUrl: './activator-store-details-overview.component.html',
  styleUrls: ['./activator-store-details-overview.component.scss']
})
export class ActivatorStoreDetailsOverviewComponent {
  @Input() activator: Activator;

  constructor() {}

  get sensitivityColor(): string {
    return String(this.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }
}
