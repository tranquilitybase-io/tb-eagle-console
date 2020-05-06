import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-landing-zone-wan-view',
  templateUrl: './landing-zone-wan-view.component.html',
  styleUrls: ['./landing-zone-wan-view.component.scss']
})
export class LandingZoneWanViewComponent implements OnInit {
  @Input() vpnFormGroup: FormGroup;
  @Input() googleSessionFormGroup: FormGroup;
  @Input() onPremiseSessionFormGroup: FormGroup;

  @Output() onSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  submit() {
    this.onSubmit.emit();
  }
}
