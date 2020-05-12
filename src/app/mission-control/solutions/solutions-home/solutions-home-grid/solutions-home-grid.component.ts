import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';
import { Solution } from '../../solutions.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solutions-home-grid',
  templateUrl: './solutions-home-grid.component.html',
  styleUrls: ['./solutions-home-grid.component.scss']
})
export class SolutionsHomeGridComponent {
  @Input() solutions$: Observable<Solution[]>;
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService, private router: Router, private route: ActivatedRoute) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  createNewSolution() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
