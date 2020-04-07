import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as WanActions from '../../landing-zone-wan.actions';
import { WanConfiguration } from '../../landing-zone-wan.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-zone-wan-forms-vpn',
  templateUrl: './landing-zone-wan-forms-vpn.component.html',
  styleUrls: ['./landing-zone-wan-forms-vpn.component.scss']
})
export class LandingZoneWanFormsVpnComponent implements OnInit {
  vpnFormGroup: FormGroup;
  googleSessionFormGroup: FormGroup;
  onPremiseSessionFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<any>) {}

  ngOnInit() {
    this.vpnFormGroup = this.formBuilder.group({
      projectName: ['', Validators.required],
      vpcName: ['', Validators.required],
      description: ['', Validators.required],
      subnetMode: ['', Validators.required],
      bgpRoutingMode: ['', Validators.required],
      haVpnGateway: ['', Validators.required],
      cloudRouterName: ['', Validators.required],
      externalVpnGateway: ['', Validators.required],
      googleASN: ['', Validators.required],
      peerASN: ['', Validators.required],
      bgpInterfaceNetLength: ['', Validators.required]
    });
    this.googleSessionFormGroup = this.formBuilder.group({
      primaryRegion: ['', Validators.required],
      primarySubnetName: ['', Validators.required],
      primaryGcpVpcSubnet: ['', Validators.required],
      secondaryRegion: [''],
      secondarySubnetName: [''],
      secondaryGcpVpcSubnet: ['']
    });
    this.onPremiseSessionFormGroup = this.formBuilder.group({
      vendor: ['', Validators.required],
      primaryPeerIp: ['', Validators.required],
      primaryPeerIpSubnet: [''],
      primaryVpnTunnel: ['', Validators.required],
      primaryBgpPeer: ['', Validators.required],
      primarySharedSecret: [''],
      secondaryPeerIp: [''],
      secondaryPeerIpSubnet: [''],
      secondaryVpnTunnel: [''],
      secondaryBgpPeer: [''],
      secondarySharedSecret: ['']
    });
  }

  submit() {
    const googleASN = Number(this.vpnFormGroup.value['googleASN']);
    const peerASN = Number(this.vpnFormGroup.value['peerASN']);
    const wanConfiguration = {
      vpn: {
        ...this.vpnFormGroup.value,
        googleASN,
        peerASN
      },
      googleSession: {
        ...this.googleSessionFormGroup.value
      },
      onPremiseSession: {
        ...this.onPremiseSessionFormGroup.value
      }
    } as WanConfiguration;

    this.store.dispatch(WanActions.createWanConfiguration({ wanConfiguration }));
    this.router.navigateByUrl('/administration/landing-zone/wan');
  }
}
