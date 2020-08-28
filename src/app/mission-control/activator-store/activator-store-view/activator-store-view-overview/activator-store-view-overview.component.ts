import { Component, OnInit } from '@angular/core';
import { Activator, ActivatorCI, ActivatorEnv } from '../../activator-store.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProgress } from '../../activator-store.actions';
import { Property } from '@app/shared/properties/properties.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-activator-store-view-overview',
  templateUrl: './activator-store-view-overview.component.html',
  styleUrls: ['./activator-store-view-overview.component.scss']
})
export class ActivatorStoreViewOverviewComponent implements OnInit {
  activator: Activator;

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(setProgress({ step: 0 }));
    this.activator = this.route.snapshot.data['activator'] as Activator;
  }

  get properties(): Property[] {
    return [
      {
        name: 'Data sensitivity',
        value: this.activator.sensitivity,
        class:
          this.activator.sensitivity && this.activator.sensitivity.toLowerCase() === 'restricted' ? 'red' : 'dark-grey'
      },
      {
        name: 'Category',
        value: this.activator.activatorMetadata.category
      },
      {
        name: 'User capacity',
        value: this.activator.userCapacity
      },
      {
        name: 'Server capacity',
        value: this.activator.serverCapacity
      },
      {
        name: 'Supported regions',
        value: this.activator.regions
      }
    ];
  }

  get envs() {
    return this.activator.envs.map(env => {
      return { value: env.name };
    });
  }

  get deploymentOptions(): Property[] {
    return [
      {
        name: 'Hosting',
        value: this.activator.hosting
      },
      {
        name: 'Api Management',
        value: this.activator.apiManagement
      },
      {
        name: 'Cloud Platform',
        value: this.activator.activatorMetadata.platforms
      },
      {
        name: 'Environment',
        value: this.envs
      },
      {
        name: 'CI (Continious integration)',
        value: this.activator.ci
      },
      {
        name: 'CD (Continious deployment)',
        value: this.activator.cd
      },
      {
        name: 'Source control',
        value: [this.activator.sourceControl]
      }
    ];
  }

  get lastUpdated(): Date {
    return new Date(this.activator.lastUpdated || null);
  }
}
