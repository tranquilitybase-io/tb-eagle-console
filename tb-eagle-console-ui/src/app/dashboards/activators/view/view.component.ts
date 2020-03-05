import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activator } from '@app/dashboards/activators/activators.model';
import { Store } from '@ngrx/store';
import { setProgress } from '../activators.actions';
import { Property } from '@app/shared/properties/properties.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
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
        value: this.activator.ci
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
}
