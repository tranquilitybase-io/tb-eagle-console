import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as WanActions from '../../landing-zone-wan.actions';
import { WanConfiguration } from '../../landing-zone-wan.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-zone-wan-create-vpn',
  templateUrl: './landing-zone-wan-create-vpn.component.html',
  styleUrls: ['./landing-zone-wan-create-vpn.component.scss']
})
export class LandingZoneWanCreateVpnComponent implements OnInit {
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
      googleASN: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(4)]],
      peerASN: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(4)]],
      bgpInterfaceNetLength: ['', [Validators.required, Validators.pattern('/+([0-9])+([0-9])')]]
    });
    this.googleSessionFormGroup = this.formBuilder.group({
      primaryRegion: ['', Validators.required],
      primarySubnetName: ['', Validators.required],
      primaryGcpVpcSubnet: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|([0-9]|[1-9][0-9]|1[0-9]{2}|/([0-9])+([0-9]))$'
          )
        ]
      ],
      secondaryRegion: [''],
      secondarySubnetName: [''],
      secondaryGcpVpcSubnet: [
        '',
        Validators.pattern(
          '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|([0-9]|[1-9][0-9]|1[0-9]{2}|/([0-9])+([0-9]))$'
        )
      ]
    });
    this.onPremiseSessionFormGroup = this.formBuilder.group({
      vendor: ['', Validators.required],
      primaryPeerIp: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|([0-9]|[1-9][0-9]|1[0-9]{2}|/([0-9])+([0-9]))$'
          )
        ]
      ],
      primaryPeerIpSubnet: [
        '',
        Validators.pattern(
          '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|([0-9]|[1-9][0-9]|1[0-9]{2}|/([0-9])+([0-9]))$'
        )
      ],
      primaryVpnTunnel: ['', Validators.required],
      primaryBgpPeer: ['', Validators.required],
      primarySharedSecret: [''],
      secondaryPeerIp: [
        '',
        Validators.pattern(
          '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|([0-9]|[1-9][0-9]|1[0-9]{2}|/([0-9])+([0-9]))$'
        )
      ],
      secondaryPeerIpSubnet: [
        '',
        Validators.pattern(
          '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|([0-9]|[1-9][0-9]|1[0-9]{2}|/([0-9])+([0-9]))$'
        )
      ],
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
