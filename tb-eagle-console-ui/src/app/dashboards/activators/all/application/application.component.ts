import { Component, Input } from '@angular/core';

import { Application } from '../interfaces';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  @Input() app: Application;
}
