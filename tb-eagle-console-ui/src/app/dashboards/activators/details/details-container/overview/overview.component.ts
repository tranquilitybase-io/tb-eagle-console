import { Component, Input } from '@angular/core';
import { Application } from '@app/dashboards/activators/interfaces';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() app: Application;

  get sensitivityColor(): string {
    return String(this.app.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }
}
