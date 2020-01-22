import { Component, Input, HostListener, OnInit } from '@angular/core';
import { formatDate, registerLocaleData } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import getCustomProperty from '@app/shared/utils/getCustomProperty';
import { Application } from '@app/dashboards/activators/interfaces';
import { Property } from '@app/shared/properties/properties.component';

import { selectProgress, selectInProgress } from '../all.reducer';
import { startDeployment } from '../all.actions';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  private _app: Application;

  properties: Property[] = [];
  strokeColor = getCustomProperty('--grey');
  active = false;
  deploymentInProgress$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.deploymentInProgress$ = this.store.pipe(select(selectInProgress(this.app.id.toString())));
    this.percentage$ = this.store.pipe(select(selectProgress(this.app.id.toString())));
  }

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
    this.store.dispatch(
      startDeployment({
        name: this.app.id.toString()
      })
    );
  }
}
