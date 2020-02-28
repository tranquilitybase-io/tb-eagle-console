import { Component, Input } from '@angular/core';
import { Activator } from '@app/dashboards/activators/activators.model';
import { Property } from '@app/shared/properties/properties.component';

@Component({
  selector: 'app-activator',
  templateUrl: './activator.component.html',
  styleUrls: ['./activator.component.scss']
})
export class ActivatorComponent {
  private _app: Activator;

  properties: Property[];
  deploymentOptions: Property[];

  @Input() set app(app: Activator) {
    this._app = app;

    if (app) {
      this.properties = this.getProps(app);
      this.deploymentOptions = this.getDeploymentOptions(app);
    }
  }

  get app(): Activator {
    return this._app;
  }

  private getProps(app: Activator): Property[] {
    return [
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
        name: 'User capacity',
        value: app.userCapacity
      },
      {
        name: 'Server capacity',
        value: app.serverCapacity
      },
      {
        name: 'Supported regions',
        value: app.regions
      }
    ];
  }

  private getDeploymentOptions(app: Activator): Property[] {
    return [
      {
        name: 'Hosting',
        value: app.hosting
      },
      {
        name: 'Api Management',
        value: app.apiManagement
      },
      {
        name: 'Cloud Platform',
        value: app.platforms
      },
      {
        name: 'Environment',
        value: app.envs
      },
      {
        name: 'CI (Continious integration)',
        value: app.ci
      },
      {
        name: 'CD (Continious deployment)',
        value: app.cd
      },
      {
        name: 'Source control',
        value: app.sourceControl
      }
    ];
  }
}
