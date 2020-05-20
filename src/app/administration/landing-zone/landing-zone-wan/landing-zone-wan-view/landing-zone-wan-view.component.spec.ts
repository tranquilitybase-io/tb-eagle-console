import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingZoneWanViewComponent } from './landing-zone-wan-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatGridListModule, MatCardModule, MatChipsModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('LandingZoneWanViewComponent', () => {
  let component: LandingZoneWanViewComponent;
  let fixture: ComponentFixture<LandingZoneWanViewComponent>;
  let store: MockStore<any>;
  const initialState = true;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingZoneWanViewComponent],
      imports: [
        RouterTestingModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatChipsModule,
        MatListModule
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingZoneWanViewComponent);
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
      googleSession: {
        primaryRegion: 'csda',
        primarySubnetName: 'csda',
        primaryGcpVpcSubnet: 'csda',
        secondaryRegion: 'csda',
        secondaryGcpVpcSubnet: 'csda',
        secondarySubnetName: 'csda'
      },
      onPremiseSession: {
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
