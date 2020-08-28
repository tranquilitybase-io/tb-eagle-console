export class WanVpnConfiguration {
  projectName: string;
  vpcName: string;
  description: string;
  subnetMode: string;
  bgpRoutingMode: string;
  haVpnGateway: string;
  cloudRouterName: string;
  externalVpnGateway: string;
  googleASN: string;
  peerASN: string;
  bgpInterfaceNetLength: string;
}

export class WanGoogleEndpointConfiguration {
  primaryRegion: string;
  primarySubnetName: string;
  primaryGcpVpcSubnet: string;
  secondaryRegion: string;
  secondarySubnetName: string;
  secondaryGcpVpcSubnet: string;
}

export class WanRemoteEndpointConfiguration {
  vendor: string;
  primaryPeerIp: string;
  primaryPeerIpSubnet: string;
  primaryVpnTunnel: string;
  primaryBgpPeer: string;
  primarySharedSecret: string;
  secondaryPeerIp: string;
  secondaryPeerIpSubnet: string;
  secondaryVpnTunnel: string;
  secondaryBgpPeer: string;
  secondarySharedSecret: string;
}

export class WanConfiguration {
  vpn: WanVpnConfiguration;
  googleEndpoint: WanGoogleEndpointConfiguration;
  remoteEndpoint: WanRemoteEndpointConfiguration;

  id: number;
  lastUpdated: string;
}
