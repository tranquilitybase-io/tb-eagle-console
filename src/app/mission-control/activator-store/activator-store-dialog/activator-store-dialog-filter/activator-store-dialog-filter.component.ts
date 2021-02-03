import { Component, OnInit } from '@angular/core';
import { createActivatorByURL, resetActivatorDataStatus } from '../../activator-store.actions';
import { Loadable } from '@app/shared/shared.reducer';

@Component({
  selector: 'app-activator-store-dialog-grant-access',
  templateUrl: './activator-store-dialog-filter.component.html',
  styleUrls: ['./activator-store-dialog-filter.component.scss']
})
export class ActivatorStoreFilterCreateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
