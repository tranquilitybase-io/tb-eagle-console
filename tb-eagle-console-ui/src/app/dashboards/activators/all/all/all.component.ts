import { Component } from '@angular/core';

import { Application } from '../interfaces';
// TODO: fetch apps from some endpoint
import apps from './apps';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {
  apps = apps;
}
