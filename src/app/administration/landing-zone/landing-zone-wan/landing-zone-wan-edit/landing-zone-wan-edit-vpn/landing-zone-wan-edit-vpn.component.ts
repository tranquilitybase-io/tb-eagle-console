import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WanConfiguration } from '../../landing-zone-wan.model';
import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs';
import { updateWanConfiguration } from '../../landing-zone-wan.actions';
import { Store } from '@ngrx/store';
import { SolutionsState } from '../../landing-zone-wan.reducers';
import { ValidatorPattern } from '@app/shared/shared.model';

@Component({
  selector: 'app-landing-zone-wan-edit-vpn',
  templateUrl: './landing-zone-wan-edit-vpn.component.html',
  styleUrls: ['./landing-zone-wan-edit-vpn.component.scss']
})
export class LandingZoneWanEditVpnComponent implements OnInit {
  vpnFormGroup: FormGroup;
  googleSessionFormGroup: FormGroup;
  onPremiseSessionFormGroup: FormGroup;
  wanConfiguration: WanConfiguration;
  subnetModeList: KeyValue<string, string>[];
  bgpRoutingModeList: KeyValue<string, string>[];
  vpnOnPremiseVendorList: KeyValue<string, string>[];
  primarySharedSecret: Observable<string>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<SolutionsState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.wanConfiguration = this.route.snapshot.data['wanConfiguration'];
    this.subnetModeList = this.route.snapshot.data['subnetModeList'];
    this.bgpRoutingModeList = this.route.snapshot.data['bgpRoutingModeList'];
    this.vpnOnPremiseVendorList = this.route.snapshot.data['vpnOnPremiseVendorList'];

    this.vpnFormGroup = this.formBuilder.group({
      projectName: [this.wanConfiguration.vpn.projectName, Validators.required],
      vpcName: [this.wanConfiguration.vpn.vpcName, Validators.required],
      description: [this.wanConfiguration.vpn.description, Validators.required],
      subnetMode: [this.wanConfiguration.vpn.subnetMode, Validators.required],
      bgpRoutingMode: [this.wanConfiguration.vpn.bgpRoutingMode, Validators.required],
      haVpnGateway: [this.wanConfiguration.vpn.haVpnGateway, Validators.required],
      cloudRouterName: [this.wanConfiguration.vpn.cloudRouterName, Validators.required],
      externalVpnGateway: [this.wanConfiguration.vpn.externalVpnGateway, Validators.required],
      googleASN: [
        this.wanConfiguration.vpn.googleASN,
        [Validators.required, Validators.pattern(ValidatorPattern.NUMBERS_ONLY), Validators.minLength(4)]
      ],
      peerASN: [
        this.wanConfiguration.vpn.peerASN,
        [Validators.required, Validators.pattern(ValidatorPattern.NUMBERS_ONLY), Validators.minLength(4)]
      ],
      bgpInterfaceNetLength: [
        this.wanConfiguration.vpn.bgpInterfaceNetLength,
        [Validators.required, Validators.pattern(ValidatorPattern.NETMASK)]
      ]
    });
    this.googleSessionFormGroup = this.formBuilder.group({
      primaryRegion: [this.wanConfiguration.googleSession.primaryRegion, Validators.required],
      primarySubnetName: [this.wanConfiguration.googleSession.primarySubnetName, Validators.required],
      primaryGcpVpcSubnet: [
        this.wanConfiguration.googleSession.primaryGcpVpcSubnet,
        [Validators.required, Validators.pattern(ValidatorPattern.IP_ADDRESS_NETMASK)]
      ],
      secondaryRegion: [this.wanConfiguration.googleSession.secondaryRegion],
      secondarySubnetName: [this.wanConfiguration.googleSession.secondarySubnetName],
      secondaryGcpVpcSubnet: [
        this.wanConfiguration.googleSession.secondaryGcpVpcSubnet,
        Validators.pattern(ValidatorPattern.IP_ADDRESS_NETMASK)
      ]
    });
    this.onPremiseSessionFormGroup = this.formBuilder.group({
      vendor: [this.wanConfiguration.onPremiseSession.vendor, Validators.required],
      primaryPeerIp: [
        this.wanConfiguration.onPremiseSession.primaryPeerIp,
        [Validators.required, Validators.pattern(ValidatorPattern.IP_ADDRESS)]
      ],
      primaryPeerIpSubnet: [
        this.wanConfiguration.onPremiseSession.primaryPeerIpSubnet,
        Validators.pattern(ValidatorPattern.IP_ADDRESS_NETMASK)
      ],
      primaryVpnTunnel: [this.wanConfiguration.onPremiseSession.primaryVpnTunnel, Validators.required],
      primaryBgpPeer: [this.wanConfiguration.onPremiseSession.primaryBgpPeer, Validators.required],
      primarySharedSecret: [this.wanConfiguration.onPremiseSession.primarySharedSecret],
      secondaryPeerIp: [
        this.wanConfiguration.onPremiseSession.secondaryPeerIp,
        Validators.pattern(ValidatorPattern.IP_ADDRESS)
      ],
      secondaryPeerIpSubnet: [
        this.wanConfiguration.onPremiseSession.secondaryPeerIpSubnet,
        Validators.pattern(ValidatorPattern.IP_ADDRESS_NETMASK)
      ],
      secondaryVpnTunnel: [this.wanConfiguration.onPremiseSession.secondaryVpnTunnel],
      secondaryBgpPeer: [this.wanConfiguration.onPremiseSession.secondaryBgpPeer],
      secondarySharedSecret: [this.wanConfiguration.onPremiseSession.secondarySharedSecret]
    });
  }

  get vpnF() {
    return this.vpnFormGroup.controls;
  }

  get googleF() {
    return this.googleSessionFormGroup.controls;
  }

  get premiseF() {
    return this.onPremiseSessionFormGroup.controls;
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  generateSharedSecret(fieldName: string) {
    this.onPremiseSessionFormGroup.controls[fieldName].setValue(this.uuidv4());
  }

  generatePrimarySharedSecret() {
    this.onPremiseSessionFormGroup.controls['primarySharedSecret'].setValue(this.uuidv4());
  }

  generateSecondarySharedSecret() {
    this.onPremiseSessionFormGroup.controls['secondarySharedSecret'].setValue(this.uuidv4());
  }

  cancel() {
    this.router.navigateByUrl('/administration/landing-zone/wan');
  }

  onSubmit() {
    const googleASN = Number(this.vpnFormGroup.value['googleASN']);
    const peerASN = Number(this.vpnFormGroup.value['peerASN']);
    const wanConfiguration = {
      id: this.wanConfiguration.id,
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

    this.store.dispatch(updateWanConfiguration({ wanConfiguration }));
    this.router.navigateByUrl('/administration/landing-zone/wan');
  }
}
