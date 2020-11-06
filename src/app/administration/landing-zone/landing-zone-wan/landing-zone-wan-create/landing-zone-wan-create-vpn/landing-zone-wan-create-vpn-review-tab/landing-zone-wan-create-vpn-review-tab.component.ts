import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-zone-wan-create-vpn-review-tab',
  templateUrl: './landing-zone-wan-create-vpn-review-tab.component.html',
  styleUrls: ['./landing-zone-wan-create-vpn-review-tab.component.scss']
})
export class LandingZoneWanCreateVpnReviewTabComponent implements OnInit {
  @Input() vpnFormGroup: FormGroup;
  @Input() googleEndpointFormGroup: FormGroup;
  @Input() remoteEndpointFormGroup: FormGroup;
  @Input() isLoading: boolean;
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

  get googleEndpointPrimaryRegion(): string {
    return this.googleEndpointFormGroup.get('primaryRegion').value;
  }

  get googleEndpointPrimarySubnetName(): string {
    return this.googleEndpointFormGroup.get('primarySubnetName').value;
  }

  get googleEndpointPrimaryGcpVpcSubnet(): string {
    return this.googleEndpointFormGroup.get('primaryGcpVpcSubnet').value;
  }

  get googleEndpointSecondaryRegion(): string {
    return this.googleEndpointFormGroup.get('secondaryRegion').value;
  }

  get googleEndpointSecondarySubnetName(): string {
    return this.googleEndpointFormGroup.get('secondarySubnetName').value;
  }

  get googleEndpointSecondaryGcpVpcSubnet(): string {
    return this.googleEndpointFormGroup.get('secondaryGcpVpcSubnet').value;
  }

  get remoteEndpointVendor(): string {
    return this.remoteEndpointFormGroup.get('vendor').value;
  }

  get remoteEndpointPrimaryPeerIp(): string {
    return this.remoteEndpointFormGroup.get('primaryPeerIp').value;
  }

  get remoteEndpointPrimaryPeerIpSubnet(): string {
    return this.remoteEndpointFormGroup.get('primaryPeerIpSubnet').value;
  }

  get remoteEndpointPrimaryVpnTunnel(): string {
    return this.remoteEndpointFormGroup.get('primaryVpnTunnel').value;
  }

  get remoteEndpointPrimaryBgpPeer(): string {
    return this.remoteEndpointFormGroup.get('primaryBgpPeer').value;
  }

  get remoteEndpointPrimarySharedSecret(): string {
    return this.remoteEndpointFormGroup.get('primarySharedSecret').value;
  }

  get remoteEndpointSecondaryPeerIp(): string {
    return this.remoteEndpointFormGroup.get('secondaryPeerIp').value;
  }

  get remoteEndpointSecondaryPeerIpSubnet(): string {
    return this.remoteEndpointFormGroup.get('secondaryPeerIpSubnet').value;
  }

  get remoteEndpointSecondaryVpnTunnel(): string {
    return this.remoteEndpointFormGroup.get('secondaryVpnTunnel').value;
  }

  get remoteEndpointSecondaryBgpPeer(): string {
    return this.remoteEndpointFormGroup.get('secondaryBgpPeer').value;
  }

  get remoteEndpointSecondarySharedSecret(): string {
    return this.remoteEndpointFormGroup.get('secondarySharedSecret').value;
  }

  submit() {
    this.onSubmit.emit();
  }
}
