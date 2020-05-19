import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WanConfiguration } from '../landing-zone-wan.model';
import { LandingZoneWanService } from '../landing-zone-wan.service';
import * as WanActions from '../landing-zone-wan.actions';

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
    // const googleASN = Number(this.vpnFormGroup.value['googleASN']);
    // const peerASN = Number(this.vpnFormGroup.value['peerASN']);
    // const wanConfiguration = {
    //   vpn: {
    //     ...this.vpnFormGroup.value,
    //     googleASN,
    //     peerASN
    //   },
    //   googleSession: {
    //     ...this.googleSessionFormGroup.value
    //   },
    //   onPremiseSession: {
    //     ...this.onPremiseSessionFormGroup.value
    //   }
    // } as WanConfiguration;

    // this.store.dispatch(WanActions.displayWanConfiguration({ wanConfiguration }));

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

  get vpnProjectName(): string {
    return this.vpnFormGroup.get('projectName').value;
  }

  get vpnDescription(): string {
    return this.vpnFormGroup.get('description').value;
  }

  get vpnSubnetMode(): string {
    return this.vpnFormGroup.get('subnetMode').value;
  }

  // get vpnBgpRoutingMode(): string {
  //   return this.vpnFormGroup.get('bgpRoutingMode').value;
  // }

  // get vpnHaVpnGateway(): string {
  //   return this.vpnFormGroup.get('haVpnGateway').value;
  // }

  // get vpnCloudRouterName(): string {
  //   return this.vpnFormGroup.get('cloudRouterName').value;
  // }

  // get vpnExternalVpnGateway(): string {
  //   return this.vpnFormGroup.get('externalVpnGateway').value;
  // }

  // get vpnGoogleASN(): string {
  //   return this.vpnFormGroup.get('googleASN').value;
  // }

  // get vpnPeerASN(): string {
  //   return this.vpnFormGroup.get('peerASN').value;
  // }

  // get vpnBgpInterfaceNetLength(): string {
  //   return this.vpnFormGroup.get('bgpInterfaceNetLength').value;
  // }

  // get googlePrimaryRegion(): string {
  //   return this.googleSessionFormGroup.get('primaryRegion').value;
  // }

  // get googlePrimarySubnetName(): string {
  //   return this.googleSessionFormGroup.get('primarySubnetName').value;
  // }

  // get googlePrimaryGcpVpcSubnet(): string {
  //   return this.googleSessionFormGroup.get('primaryGcpVpcSubnet').value;
  // }

  // get googleSecondaryRegion(): string {
  //   return this.googleSessionFormGroup.get('secondaryRegion').value;
  // }

  // get googleSecondarySubnetName(): string {
  //   return this.googleSessionFormGroup.get('secondarySubnetName').value;
  // }

  // get googleSecondaryGcpVpcSubnet(): string {
  //   return this.googleSessionFormGroup.get('secondaryGcpVpcSubnet').value;
  // }

  // get onPremiseVendor(): string {
  //   return this.onPremiseSessionFormGroup.get('vendor').value;
  // }

  // get onPremisePrimaryPeerIp(): string {
  //   return this.onPremiseSessionFormGroup.get('primaryPeerIp').value;
  // }

  // get onPremisePrimaryPeerIpSubnet(): string {
  //   return this.onPremiseSessionFormGroup.get('primaryPeerIpSubnet').value;
  // }

  // get onPremisePrimaryVpnTunnel(): string {
  //   return this.onPremiseSessionFormGroup.get('primaryVpnTunnel').value;
  // }

  // get onPremisePrimaryBgpPeer(): string {
  //   return this.onPremiseSessionFormGroup.get('primaryBgpPeer').value;
  // }

  // get onPremisePrimarySharedSecret(): string {
  //   return this.onPremiseSessionFormGroup.get('primarySharedSecret').value;
  // }

  // get onPremiseSecondaryPeerIp(): string {
  //   return this.onPremiseSessionFormGroup.get('secondaryPeerIp').value;
  // }

  // get onPremiseSecondaryPeerIpSubnet(): string {
  //   return this.onPremiseSessionFormGroup.get('secondaryPeerIpSubnet').value;
  // }

  // get onPremiseSecondaryVpnTunnel(): string {
  //   return this.onPremiseSessionFormGroup.get('secondaryVpnTunnel').value;
  // }

  // get onPremiseSecondaryBgpPeer(): string {
  //   return this.onPremiseSessionFormGroup.get('secondaryBgpPeer').value;
  // }

  // get onPremiseSecondarySharedSecret(): string {
  //   return this.onPremiseSessionFormGroup.get('secondarySharedSecret').value;
  // }

  cancel() {
    this.router.navigateByUrl(`/administration/landing-zone/`);
  }
}
