import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { WanConfiguration } from '../landing-zone-wan.model';
import { LandingZoneWanService } from '../landing-zone-wan.service';
import * as WanActions from '../landing-zone-wan.actions';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-landing-zone-wan-view',
  templateUrl: './landing-zone-wan-view.component.html',
  styleUrls: ['./landing-zone-wan-view.component.scss']
})
export class LandingZoneWanViewComponent implements OnInit {
  wanConfiguration: WanConfiguration;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.wanConfiguration = this.route.snapshot.data['wanConfiguration'];
  }
}
