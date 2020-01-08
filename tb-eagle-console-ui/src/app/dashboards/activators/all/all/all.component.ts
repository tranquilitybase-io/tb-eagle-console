import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApplicationsService } from '../applications.service';
import { Application } from '../interfaces';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  apps$: Observable<Application[]>;

  constructor(private appsService: ApplicationsService) {
    this.apps$ = appsService.entities$;
  }

  ngOnInit() {
    this.appsService.getAll();
  }
}
