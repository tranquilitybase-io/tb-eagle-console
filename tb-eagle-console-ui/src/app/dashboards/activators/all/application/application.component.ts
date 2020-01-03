import { Component, Input } from '@angular/core';
import getCustomProperty from '@app/shared/utils/getCustomProperty';

import { Application } from '../interfaces';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  strokeColor = getCustomProperty('--grey');

  @Input() app: Application;
}
