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
      projectName: ['dev', Validators.required],
      vpcName: ['dev', Validators.required],
      description: ['Backup VPN connection between GCP US and CISCO 5505 on prem', Validators.required],
      subnetMode: ['dev', Validators.required],
      bgpRoutingMode: ['dev', Validators.required],
      haVpnGateway: ['dev', Validators.required],
      cloudRouterName: ['dev', Validators.required],
      externalVpnGateway: ['dev', Validators.required],
      googleASN: ['30000', Validators.required],
      peerASN: ['30001', Validators.required],
      bgpInterfaceNetLength: ['dev', Validators.required]
    });
    this.googleSessionFormGroup = this.formBuilder.group({
      primaryRegion: ['dev', Validators.required],
      primarySubnetName: ['dev', Validators.required],
      primaryGcpVpcSubnet: ['dev', Validators.required],
      secondaryRegion: [''],
      secondarySubnetName: [''],
      secondaryGcpVpcSubnet: ['']
    });
    this.onPremiseSessionFormGroup = this.formBuilder.group({
      vendor: ['dev', Validators.required],
      primaryPeerIp: ['dev', Validators.required],
      primaryPeerIpSubnet: ['dev'],
      primaryVpnTunnel: ['dev', Validators.required],
      primaryBgpPeer: ['dev', Validators.required],
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
