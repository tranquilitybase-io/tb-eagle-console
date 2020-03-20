import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-zone-wan-forms-vpn-review-tab',
  templateUrl: './landing-zone-wan-forms-vpn-review-tab.component.html',
  styleUrls: ['./landing-zone-wan-forms-vpn-review-tab.component.scss']
})
export class LandingZoneWanFormsVpnReviewTabComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  submit() {
    this.onSubmit.emit();
  }
}
