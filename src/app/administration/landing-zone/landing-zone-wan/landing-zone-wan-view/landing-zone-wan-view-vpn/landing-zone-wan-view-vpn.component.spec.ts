import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanViewVpnComponent } from './landing-zone-wan-view-vpn.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

describe('LandingZoneWanViewVpnComponent', () => {
  let component: LandingZoneWanViewVpnComponent;
  let fixture: ComponentFixture<LandingZoneWanViewVpnComponent>;
  let store: MockStore<any>;
  const initialState = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanViewVpnComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatIconModule,
        MatListModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanViewVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    component.wanConfiguration = {
      vpn: {
        projectName: 'few',
        vpcName: 'dwe',
        description: 'dwe',
        subnetMode: 'dew',
        bgpRoutingMode: 'dew',
        haVpnGateway: 'csdsd',
        cloudRouterName: 'vfd',
        externalVpnGateway: 'vfd',
        googleASN: 'vdfvd',
        peerASN: 'feffa',
        bgpInterfaceNetLength: 'dasd'
      },
      googleEndpoint: {
        primaryRegion: 'csda',
        primarySubnetName: 'csda',
        primaryGcpVpcSubnet: 'csda',
        secondaryRegion: 'csda',
        secondaryGcpVpcSubnet: 'csda',
        secondarySubnetName: 'csda'
      },
      remoteEndpoint: {
        vendor: 'csda',
        primaryVpnTunnel: 'csda',
        secondaryVpnTunnel: 'csda',
        primaryBgpPeer: 'csda',
        primaryPeerIpSubnet: 'csda',
        primaryPeerIp: 'csda',
        primarySharedSecret: 'csda',
        secondaryBgpPeer: 'csda',
        secondaryPeerIp: 'csda',
        secondaryPeerIpSubnet: 'csda',
        secondarySharedSecret: 'csda'
      },
      id: 21,
      lastUpdated: ''
    };

    expect(component).toBeTruthy();
  });
});
