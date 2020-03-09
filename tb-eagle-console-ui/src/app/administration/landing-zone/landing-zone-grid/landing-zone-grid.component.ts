import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-zone-grid',
  templateUrl: './landing-zone-grid.component.html',
  styleUrls: ['./landing-zone-grid.component.scss']
})
export class LandingZoneGridComponent {
  actions = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return [
        { title: 'Folder structure', categoryName: '', categoryClass: 'folder-structure' },
        { title: 'WAN', categoryName: 'Network Setup', categoryClass: 'network-setup' },
        { title: 'LAN', categoryName: 'Network Setup', categoryClass: 'network-setup' },
        { title: 'DNS', categoryName: 'Network Setup', categoryClass: 'network-setup' },
        { title: 'Internet access', categoryName: 'Network Setup', categoryClass: 'network-setup' },
        { title: 'SSO', categoryName: 'AD Integration', categoryClass: 'ad-integration' },
        { title: 'ADFS', categoryName: 'AD Integration', categoryClass: 'ad-integration' },
        { title: 'Stackdriver', categoryName: 'Logging', categoryClass: 'logging' },
        { title: 'Data Dog', categoryName: 'Logging', categoryClass: 'logging' },
        { title: 'Cloud Health', categoryName: 'Billing/Cost Management', categoryClass: 'billing-cost-management' },
        { title: 'Security', categoryName: '', categoryClass: 'security' },
        { title: 'Multizone setup', categoryName: '', categoryClass: 'multizone-setup' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
