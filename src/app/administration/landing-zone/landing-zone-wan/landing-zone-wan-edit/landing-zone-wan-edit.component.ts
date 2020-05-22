import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { WanConfiguration } from '../landing-zone-wan.model';

@Component({
  selector: 'app-landing-zone-wan-edit',
  templateUrl: './landing-zone-wan-edit.component.html',
  styleUrls: ['./landing-zone-wan-edit.component.scss']
})
export class LandingZoneWanEditComponent implements OnInit {
  vpnFormGroup: FormGroup;
  googleSessionFormGroup: FormGroup;
  onPremiseSessionFormGroup: FormGroup;
  wanConfiguration: WanConfiguration;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.wanConfiguration = this.route.snapshot.data['wanConfiguration'];

    this.vpnFormGroup = this.formBuilder.group({
      projectName: [this.wanConfiguration.vpn.projectName, Validators.required],
      vpcName: [this.wanConfiguration.vpn.vpcName, Validators.required],
      description: [this.wanConfiguration.vpn.description, Validators.required],
      subnetMode: [this.wanConfiguration.vpn.subnetMode, Validators.required],
      bgpRoutingMode: [this.wanConfiguration.vpn.bgpRoutingMode, Validators.required],
      haVpnGateway: [this.wanConfiguration.vpn.haVpnGateway, Validators.required],
      cloudRouterName: [this.wanConfiguration.vpn.cloudRouterName, Validators.required],
      externalVpnGateway: [this.wanConfiguration.vpn.externalVpnGateway, Validators.required],
      googleASN: [this.wanConfiguration.vpn.googleASN, Validators.required],
      peerASN: [this.wanConfiguration.vpn.peerASN, Validators.required],
      bgpInterfaceNetLength: [this.wanConfiguration.vpn.bgpInterfaceNetLength, Validators.required]
    });
    this.googleSessionFormGroup = this.formBuilder.group({
      primaryRegion: [this.wanConfiguration.googleSession.primaryRegion, Validators.required],
      primarySubnetName: [this.wanConfiguration.googleSession.primarySubnetName, Validators.required],
      primaryGcpVpcSubnet: [this.wanConfiguration.googleSession.primaryGcpVpcSubnet, Validators.required],
      secondaryRegion: [this.wanConfiguration.googleSession.secondaryRegion],
      secondarySubnetName: [this.wanConfiguration.googleSession.secondarySubnetName],
      secondaryGcpVpcSubnet: [this.wanConfiguration.googleSession.primaryGcpVpcSubnet]
    });
    this.onPremiseSessionFormGroup = this.formBuilder.group({
      vendor: [this.wanConfiguration.onPremiseSession.vendor, Validators.required],
      primaryPeerIp: [this.wanConfiguration.onPremiseSession.primaryPeerIp, Validators.required],
      primaryPeerIpSubnet: [this.wanConfiguration.onPremiseSession.primaryPeerIpSubnet],
      primaryVpnTunnel: [this.wanConfiguration.onPremiseSession.primaryVpnTunnel, Validators.required],
      primaryBgpPeer: [this.wanConfiguration.onPremiseSession.primaryBgpPeer, Validators.required],
      primarySharedSecret: [this.wanConfiguration.onPremiseSession.primarySharedSecret],
      secondaryPeerIp: [this.wanConfiguration.onPremiseSession.secondaryPeerIp],
      secondaryPeerIpSubnet: [this.wanConfiguration.onPremiseSession.secondaryPeerIpSubnet],
      secondaryVpnTunnel: [this.wanConfiguration.onPremiseSession.secondaryVpnTunnel],
      secondaryBgpPeer: [this.wanConfiguration.onPremiseSession.secondaryBgpPeer],
      secondarySharedSecret: [this.wanConfiguration.onPremiseSession.secondarySharedSecret]
    });
  }
}
