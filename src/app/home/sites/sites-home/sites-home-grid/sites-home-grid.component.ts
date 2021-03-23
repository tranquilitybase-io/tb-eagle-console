import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout } from '@app/layout/layout.model';
import { LayoutService } from '@app/layout/layout.service';
import { TableData } from '../../sites.model';

@Component({
  selector: 'app-sites-home-grid',
  templateUrl: './sites-home-grid.component.html',
  styleUrls: ['./sites-home-grid.component.scss'],
})
export class SitesHomeGridComponent {
  @Input() sites$: Observable<TableData[]>;
  @Input() isLoading: boolean;
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }
}
