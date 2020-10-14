import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout } from '@app/shared/layout/layout.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessUnit } from '../../business-unit.model';

@Component({
  selector: 'app-business-unit-home-grid',
  templateUrl: './business-unit-home-grid.component.html',
  styleUrls: ['./business-unit-home-grid.component.scss']
})
export class BusinessUnitHomeGridComponent {
  @Input() businessUnitList$: Observable<BusinessUnit[]>;

  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService, private router: Router, private route: ActivatedRoute) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  createNewBusinessUnit() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
