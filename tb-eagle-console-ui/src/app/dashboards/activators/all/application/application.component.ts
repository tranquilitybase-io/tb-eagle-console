import { Component, Input, HostListener } from '@angular/core';
import getCustomProperty from '@app/shared/utils/getCustomProperty';

import { Application } from '../interfaces';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  strokeColor = getCustomProperty('--grey');
  active = false;

  @Input() app: Application;

  isRestricted() {
    return this.app.sensitivity.toLowerCase() === 'restricted';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }
}
