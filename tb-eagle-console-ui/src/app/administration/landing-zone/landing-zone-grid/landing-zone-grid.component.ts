import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { GridColsService } from '@app/shared/grid-cols/grid-cols.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-zone-grid',
  templateUrl: './landing-zone-grid.component.html',
  styleUrls: ['./landing-zone-grid.component.scss']
})
export class LandingZoneGridComponent {
  actions = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return [
        {
          title: 'Folder structure',
          categoryName: '',
          categoryClass: 'folder-structure',
          completionRate: 50
        },
        {
          title: 'WAN',
          categoryName: 'Network Setup',
          categoryClass: 'network-setup',
          completionRate: 100
        },
        {
          title: 'LAN',
          categoryName: 'Network Setup',
          categoryClass: 'network-setup',
          completionRate: 25
        },
        {
          title: 'DNS',
          categoryName: 'Network Setup',
          categoryClass: 'network-setup',
          completionRate: 75
        },
        {
          title: 'Internet access',
          categoryName: 'Network Setup',
          categoryClass: 'network-setup',
          completionRate: 9
        },
        {
          title: 'SSO',
          categoryName: 'AD Integration',
          categoryClass: 'ad-integration',
          completionRate: 25
        },
        {
          title: 'ADFS',
          categoryName: 'AD Integration',
          categoryClass: 'ad-integration',
          completionRate: 0
        },
        {
          title: 'Stackdriver',
          categoryName: 'Logging',
          categoryClass: 'logging',
          completionRate: 50
        },
        {
          title: 'Data Dog',
          categoryName: 'Logging',
          categoryClass: 'logging',
          completionRate: 30
        },
        {
          title: 'Cloud Health',
          categoryName: 'Billing/Cost Management',
          categoryClass: 'billing-cost-management',
          completionRate: 19
        },
        {
          title: 'Security',
          categoryName: '',
          categoryClass: 'security',
          completionRate: 13
        },
        {
          title: 'Multizone setup',
          categoryName: '',
          categoryClass: 'multizone-setup',
          completionRate: 12
        }
      ];
    })
  );

  gridCols$: Observable<number>;

  constructor(private breakpointObserver: BreakpointObserver, private gridColsService: GridColsService) {
    this.gridCols$ = this.gridColsService.gridColsObserver$;
  }

  progressValueClass(value: number): string {
    return value < 10 ? 'one-digit' : value == 100 ? 'completed' : '';
  }
}
