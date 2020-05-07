import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WanConfiguration } from '../landing-zone-wan.model';
import { LandingZoneWanService } from '../landing-zone-wan.service';

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
  view: WanConfiguration;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>,
    private landingZoneWanService: LandingZoneWanService
  ) {}

  ngOnInit() {
    this.vpnFormGroup = this.formBuilder.group({
      projectName: [this.view.vpn.projectName],
      vpcName: [this.view.vpn.vpcName],
      description: [this.view.vpn.description],
      subnetMode: [this.view.vpn.subnetMode],
      bgpRoutingMode: [this.view.vpn.bgpRoutingMode],
      haVpnGateway: [this.view.vpn.haVpnGateway],
      cloudRouterName: [this.view.vpn.cloudRouterName],
      externalVpnGateway: [this.view.vpn.externalVpnGateway],
      googleASN: [this.view.vpn.googleASN],
      peerASN: [this.view.vpn.peerASN],
      bgpInterfaceNetLength: [this.view.vpn.bgpInterfaceNetLength]
    });
    this.googleSessionFormGroup = this.formBuilder.group({
      primaryRegion: [this.view.googleSession.primaryRegion],
      primarySubnetName: [this.view.googleSession.primarySubnetName],
      primaryGcpVpcSubnet: [this.view.googleSession.primaryGcpVpcSubnet],
      secondaryRegion: [this.view.googleSession.secondaryRegion],
      secondarySubnetName: [this.view.googleSession.secondarySubnetName],
      secondaryGcpVpcSubnet: [this.view.googleSession.secondaryGcpVpcSubnet]
    });
    this.onPremiseSessionFormGroup = this.formBuilder.group({
      vendor: [this.view.onPremiseSession.vendor],
      primaryPeerIp: [this.view.onPremiseSession.primaryPeerIp],
      primaryPeerIpSubnet: [this.view.onPremiseSession.primaryPeerIpSubnet],
      primaryVpnTunnel: [this.view.onPremiseSession.primaryVpnTunnel],
      primaryBgpPeer: [this.view.onPremiseSession.primaryBgpPeer],
      primarySharedSecret: [this.view.onPremiseSession.primarySharedSecret],
      secondaryPeerIp: [this.view.onPremiseSession.secondaryPeerIp],
      secondaryPeerIpSubnet: [this.view.onPremiseSession.secondaryPeerIpSubnet],
      secondaryVpnTunnel: [this.view.onPremiseSession.secondaryVpnTunnel],
      secondaryBgpPeer: [this.view.onPremiseSession.secondaryBgpPeer],
      secondarySharedSecret: [this.view.onPremiseSession.primarySharedSecret]
    });
  }

  cancel() {
    this.router.navigateByUrl(`/administration/landing-zone/`);
  }
}
