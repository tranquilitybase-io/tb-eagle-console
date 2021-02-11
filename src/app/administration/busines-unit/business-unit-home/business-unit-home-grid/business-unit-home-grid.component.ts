import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout } from '@app/layout/layout.model';
import { LayoutService } from '@app/layout/layout.service';
import { BusinessUnit } from '../../business-unit.model';

@Component({
  selector: 'app-business-unit-home-grid',
  templateUrl: './business-unit-home-grid.component.html',
  styleUrls: ['./business-unit-home-grid.component.scss']
})
export class BusinessUnitHomeGridComponent {
  @Input() businessUnitList$: Observable<BusinessUnit[]>;
  @Input() isLoading: boolean;

  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }
}
