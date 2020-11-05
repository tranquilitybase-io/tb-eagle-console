import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as WanActions from '../../landing-zone-wan.actions';
import { WanConfiguration } from '../../landing-zone-wan.model';
import { Router } from '@angular/router';
import { ValidatorPattern } from '@app/shared/shared.model';
import { Loadable } from '@app/shared/shared.reducer';
import { resetCreateWanConfigurationStatus } from '../../landing-zone-wan.actions';
import { selectCreateWanConfigurationStatus } from '../../landing-zone-wan.reducer';

@Component({
  selector: 'app-landing-zone-wan-create-vpn',
  templateUrl: './landing-zone-wan-create-vpn.component.html',
  styleUrls: ['./landing-zone-wan-create-vpn.component.scss']
})
export class LandingZoneWanCreateVpnComponent implements OnInit {
  vpnFormGroup: FormGroup;
  googleEndpointFormGroup: FormGroup;
  remoteEndpointFormGroup: FormGroup;
  createWanConfigurationStatus$: Observable<Loadable> = this.store.pipe(select(selectCreateWanConfigurationStatus));

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(resetCreateWanConfigurationStatus());
    this.vpnFormGroup = this.formBuilder.group({
      projectName: ['', Validators.required],
      vpcName: ['', Validators.required],
      description: ['', Validators.required],
      subnetMode: ['', Validators.required],
      bgpRoutingMode: ['', Validators.required],
      haVpnGateway: ['', Validators.required],
      cloudRouterName: ['', Validators.required],
      externalVpnGateway: ['', Validators.required],
      googleASN: [
        '',
        [Validators.required, Validators.pattern(ValidatorPattern.NUMBERS_ONLY), Validators.minLength(4)]
      ],
      peerASN: ['', [Validators.required, Validators.pattern(ValidatorPattern.NUMBERS_ONLY), Validators.minLength(4)]],
      bgpInterfaceNetLength: ['', [Validators.required, Validators.pattern(ValidatorPattern.NETMASK)]]
    });
    this.googleEndpointFormGroup = this.formBuilder.group({
      primaryRegion: ['', Validators.required],
      primarySubnetName: ['', Validators.required],
      primaryGcpVpcSubnet: ['', [Validators.required, Validators.pattern(ValidatorPattern.IP_ADDRESS_NETMASK)]],
      secondaryRegion: [''],
      secondarySubnetName: [''],
      secondaryGcpVpcSubnet: ['', Validators.pattern(ValidatorPattern.IP_ADDRESS_NETMASK)]
    });
    this.remoteEndpointFormGroup = this.formBuilder.group({
      vendor: ['', Validators.required],
      primaryPeerIp: ['', [Validators.required, Validators.pattern(ValidatorPattern.IP_ADDRESS)]],
      primaryPeerIpSubnet: ['', Validators.pattern(ValidatorPattern.IP_ADDRESS_NETMASK)],
      primaryVpnTunnel: ['', Validators.required],
      primaryBgpPeer: ['', Validators.required],
      primarySharedSecret: [''],
      secondaryPeerIp: ['', Validators.pattern(ValidatorPattern.IP_ADDRESS)],
      secondaryPeerIpSubnet: ['', Validators.pattern(ValidatorPattern.IP_ADDRESS_NETMASK)],
      secondaryVpnTunnel: [''],
      secondaryBgpPeer: [''],
      secondarySharedSecret: ['']
    });

    this.createWanConfigurationStatus$.subscribe(status => {
      this.handleCreateWanConfigurationStatus(status);
    });
  }

  private navigateToLandingzoneWan() {
    this.router.navigateByUrl('/administration/landing-zone/wan');
  }

  handleCreateWanConfigurationStatus(status: Loadable) {
    if (status.loading) {
      this.vpnFormGroup.disable();
      this.googleEndpointFormGroup.disable();
      this.remoteEndpointFormGroup.disable();
    } else {
      this.vpnFormGroup.enable();
      this.googleEndpointFormGroup.enable();
      this.remoteEndpointFormGroup.enable();
    }
    status.success && this.navigateToLandingzoneWan();
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
      googleEndpoint: {
        ...this.googleEndpointFormGroup.value
      },
      remoteEndpoint: {
        ...this.remoteEndpointFormGroup.value
      }
    } as WanConfiguration;

    this.store.dispatch(WanActions.createWanConfiguration({ wanConfiguration }));
  }
}
