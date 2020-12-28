import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-landing-zone-home',
  templateUrl: './shared-service-home.component.html',
  styleUrls: ['./shared-service-home.component.scss']
})
export class SharedServiceHomeComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}
}
