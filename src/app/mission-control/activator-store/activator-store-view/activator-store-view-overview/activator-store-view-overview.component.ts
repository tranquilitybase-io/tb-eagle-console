import { Component, OnInit } from '@angular/core';
import { Activator, ActivatorCI } from '../../activator-store.model';
import { concatMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProgress } from '../../activator-store.actions';
import { Property } from '@app/shared/properties/properties.component';
import { ActivatorStoreService } from '@app/mission-control/activator-store/activator-store.service';

@Component({
  selector: 'app-activator-store-view-overview',
  templateUrl: './activator-store-view-overview.component.html',
  styleUrls: ['./activator-store-view-overview.component.scss']
})
export class ActivatorStoreViewOverviewComponent implements OnInit {
  activator: Activator = { sensitivity: '' } as Activator;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
    private activatorStoreService: ActivatorStoreService
  ) {}

  ngOnInit() {
    this.store.dispatch(setProgress({ step: 0 }));
    this.route.queryParams
      .pipe(
        concatMap(params => {
          return this.activatorStoreService.getByKey(params['id']);
        })
      )
      .subscribe(activator => (this.activator = activator as Activator));
  }

  get properties(): Property[] {
    return [
      {
        name: 'Data sensitivity',
        value: this.activator.sensitivity,
        class: this.activator.sensitivity.toLowerCase() === 'restricted' ? 'red' : 'dark-grey'
      },
      {
        name: 'Category',
        value: this.activator.category
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

  get ci() {
    return ((this.activator.ci || []) as ActivatorCI[]).map(ci => ci.value);
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
        value: this.activator.platforms
      },
      {
        name: 'Environment',
        value: this.activator.envs
      },
      {
        name: 'CI (Continious integration)',
        value: this.ci
      },
      {
        name: 'CD (Continious deployment)',
        value: this.activator.cd
      },
      {
        name: 'Source control',
        value: this.activator.sourceControl
      }
    ];
  }

  get lastUpdated(): Date {
    return new Date(this.activator.lastUpdated || null);
  }
}
