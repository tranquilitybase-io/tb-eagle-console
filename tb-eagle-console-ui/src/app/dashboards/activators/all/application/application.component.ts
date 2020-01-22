import { Component, Input, HostListener } from '@angular/core';
import { formatDate } from '@angular/common';
import getCustomProperty from '@app/shared/utils/getCustomProperty';
import { Application } from '@app/dashboards/activators/interfaces';
import { Property } from '@app/shared/properties/properties.component';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  private _app: Application;

  properties: Property[] = [];
  strokeColor = getCustomProperty('--grey');
  active = false;
  deploymentInProgress = false;
  percentage = 0;

  @Input() set app(app: Application) {
    this._app = app;
    this.properties = [
      {
        name: 'Data sensitivity',
        value: app.sensitivity,
        class: this.app.sensitivity.toLowerCase() === 'restricted' ? 'red' : 'dark-grey'
      },
      {
        name: 'Category',
        value: app.category
      },
      {
        name: 'Environments',
        value: app.envs
      },
      {
        name: 'Cloud platform',
        value: app.platforms
      },
      {
        name: 'Last updated',
        value: formatDate(app.update, 'dd MMM yyyy', 'en')
      }
    ];
  }

  get app(): Application {
    return this._app;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }

  deploy() {
    if (this.deploymentInProgress) {
      return;
    }

    this.deploymentInProgress = true;
    this.percentage = 0;

    // Mock-up code simulating deployment to be removed
    const tick = () => {
      if (this.percentage < 100) {
        this.percentage += 2;
        return setTimeout(tick, 40);
      }

      this.deploymentInProgress = false;
    };

    tick();
  }
}
