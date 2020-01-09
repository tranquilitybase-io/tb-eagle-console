import { Component, Input } from '@angular/core';

import { Application } from '@app/dashboards/activators/interfaces';

@Component({
  selector: 'app-activator',
  templateUrl: './activator.component.html',
  styleUrls: ['./activator.component.scss']
})
export class ActivatorComponent {
  @Input() app: Application;
}
