import { Component, Input } from '@angular/core';
import { Activator } from '@app/dashboards/activators/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() app: Activator;

  get sensitivityColor(): string {
    return String(this.app.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }
}
