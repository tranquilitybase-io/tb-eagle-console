import { Component, OnInit } from '@angular/core';
import { Activator, ActivatorCI } from '../../activator-store.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { setProgress, storeActivatorData } from '../../activator-store.actions';
import { selectActivatorData } from '../../activator-store.reducer';
import { Property } from '@app/shared/properties/properties.component';
import { ActivatorStoreService } from '@app/mission-control/activator-store/activator-store.service';

@Component({
  selector: 'app-activator-store-view-overview',
  templateUrl: './activator-store-view-overview.component.html',
  styleUrls: ['./activator-store-view-overview.component.scss']
})
export class ActivatorStoreViewOverviewComponent implements OnInit {
  activator: Activator = { sensitivity: '' } as Activator;
  activator$: Observable<Activator>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
    private activatorStoreService: ActivatorStoreService
  ) {
    this.activator$ = this.store.pipe(select(selectActivatorData));
  }

  ngOnInit() {
    this.store.dispatch(setProgress({ step: 0 }));
    this.activator = this.route.snapshot.data['activator'] as Activator;
    this.store.dispatch(storeActivatorData({ activatorData: this.activator }));
    this.activator$.subscribe(activatorData => {
      this.activator = activatorData;
    });
    this.route.queryParams
      .pipe(
        switchMap(params => {
          return this.activatorStoreService.getByKey(params['id']);
        })
      )
      .subscribe(activator => {
        this.store.dispatch(storeActivatorData({ activatorData: activator }));
      });
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

  get activatorLink(): string {
    return this.activator && this.activator.activatorMetadata && this.activator.activatorMetadata.activatorLink;
  }

  unSlugify(string) {
    const unslugifiedString = string.replaceAll('_', ' ');
    return unslugifiedString.charAt(0).toUpperCase() + unslugifiedString.slice(1);
  }
}
