import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-zone-wan-forms-vpn',
  templateUrl: './landing-zone-wan-forms-vpn.component.html',
  styleUrls: ['./landing-zone-wan-forms-vpn.component.scss']
})
export class LandingZoneWanFormsVpnComponent implements OnInit {
  vpnFormGroup: FormGroup;
  googleSessionFormGroup: FormGroup;
  onPremiseSessionFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.vpnFormGroup = this.formBuilder.group({
      fieldCtrl: ['', Validators.required]
    });
    this.googleSessionFormGroup = this.formBuilder.group({
      fieldCtrl: ['', Validators.required]
    });
    this.onPremiseSessionFormGroup = this.formBuilder.group({
      fieldCtrl: ['', Validators.required]
    });
  }

  submit() {
    //TODO
  }
}
