import { Component, Input, HostListener, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import getCustomProperty from '@app/shared/utils/getCustomProperty';
import { Activator } from '@app/dashboards/activators/activators.model';
import { Property } from '@app/shared/properties/properties.component';

import { selectProgress, selectInProgress } from '../all.reducer';
import { Router } from '@angular/router';
// import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  private _app: Activator;
  // isOpened: boolean = false;
  isStroke: boolean = true;
  properties: Property[] = [];
  strokeColor = getCustomProperty('--grey');
  active = false;
  deploymentInProgress$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.deploymentInProgress$ = this.store.pipe(select(selectInProgress(this.app.id.toString())));
    this.percentage$ = this.store.pipe(select(selectProgress(this.app.id.toString())));
  }

  // toggleMenu() {
  //   this.isOpened = !this.isOpened;
  //   console.log(this.app.name);
  // }

  @Input() set app(app: Activator) {
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

  get app(): Activator {
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

  addToSolution() {
    this.router.navigateByUrl(`/dashboard/activators/create?id=${this.app.id}`);
  }
}
