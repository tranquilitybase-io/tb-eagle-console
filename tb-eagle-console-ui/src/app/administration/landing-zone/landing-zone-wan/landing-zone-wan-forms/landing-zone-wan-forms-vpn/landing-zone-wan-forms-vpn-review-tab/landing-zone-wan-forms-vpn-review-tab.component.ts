import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-zone-wan-forms-vpn-review-tab',
  templateUrl: './landing-zone-wan-forms-vpn-review-tab.component.html',
  styleUrls: ['./landing-zone-wan-forms-vpn-review-tab.component.scss']
})
export class LandingZoneWanFormsVpnReviewTabComponent implements OnInit {
  @Input() vpnFormGroup: FormGroup;
  @Input() googleSessionFormGroup: FormGroup;
  @Input() onPremiseSessionFormGroup: FormGroup;

  @Output() onSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  get vpnProjectName(): string {
    return this.vpnFormGroup.get('projectName').value;
  }

  get vpnDescription(): string {
    return this.vpnFormGroup.get('description').value;
  }

  get vpnSubnetMode(): string {
    return this.vpnFormGroup.get('subnetMode').value;
  }

  get vpnBgpRoutingMode(): string {
    return this.vpnFormGroup.get('bgpRoutingMode').value;
  }

  get vpnHaVpnGateway(): string {
    return this.vpnFormGroup.get('haVpnGateway').value;
  }

  get vpnCloudRouterName(): string {
    return this.vpnFormGroup.get('cloudRouterName').value;
  }

  get vpnExternalVpnGateway(): string {
    return this.vpnFormGroup.get('externalVpnGateway').value;
  }

  get vpnGoogleASN(): string {
    return this.vpnFormGroup.get('googleASN').value;
  }

  get vpnPeerASN(): string {
    return this.vpnFormGroup.get('peerASN').value;
  }

  get vpnBgpInterfaceNetLength(): string {
    return this.vpnFormGroup.get('bgpInterfaceNetLength').value;
  }

  get googlePrimaryRegion(): string {
    return this.googleSessionFormGroup.get('primaryRegion').value;
  }

  get googlePrimarySubnetName(): string {
    return this.googleSessionFormGroup.get('primarySubnetName').value;
  }

  get googlePrimaryGcpVpcSubnet(): string {
    return this.googleSessionFormGroup.get('primaryGcpVpcSubnet').value;
  }

  get googleSecondaryRegion(): string {
    return this.googleSessionFormGroup.get('secondaryRegion').value;
  }

  get googleSecondarySubnetName(): string {
    return this.googleSessionFormGroup.get('secondarySubnetName').value;
  }

  get googleSecondaryGcpVpcSubnet(): string {
    return this.googleSessionFormGroup.get('secondaryGcpVpcSubnet').value;
  }

  get onPremiseVendor(): string {
    return this.onPremiseSessionFormGroup.get('vendor').value;
  }

  get onPremisePrimaryPeerIp(): string {
    return this.onPremiseSessionFormGroup.get('primaryPeerIp').value;
  }

  get onPremisePrimaryPeerIpSubnet(): string {
    return this.onPremiseSessionFormGroup.get('primaryPeerIpSubnet').value;
  }

  get onPremisePrimaryVpnTunnel(): string {
    return this.onPremiseSessionFormGroup.get('primaryVpnTunnel').value;
  }

  get onPremisePrimaryBgpPeer(): string {
    return this.onPremiseSessionFormGroup.get('primaryBgpPeer').value;
  }

  get onPremisePrimarySharedSecret(): string {
    return this.onPremiseSessionFormGroup.get('primarySharedSecret').value;
  }

  get onPremiseSecondaryPeerIp(): string {
    return this.onPremiseSessionFormGroup.get('secondaryPeerIp').value;
  }

  get onPremiseSecondaryPeerIpSubnet(): string {
    return this.onPremiseSessionFormGroup.get('secondaryPeerIpSubnet').value;
  }

  get onPremiseSecondaryVpnTunnel(): string {
    return this.onPremiseSessionFormGroup.get('secondaryVpnTunnel').value;
  }

  get onPremiseSecondaryBgpPeer(): string {
    return this.onPremiseSessionFormGroup.get('secondaryBgpPeer').value;
  }

  get onPremiseSecondarySharedSecret(): string {
    return this.onPremiseSessionFormGroup.get('secondarySharedSecret').value;
  }

  submit() {
    this.onSubmit.emit();
  }
}
