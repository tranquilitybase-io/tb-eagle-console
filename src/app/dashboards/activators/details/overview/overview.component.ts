import { Component, Input } from '@angular/core';
import { Activator } from '@app/dashboards/activators/activators.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() activator: Activator;

  get sensitivityColor(): string {
    return String(this.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }
}
