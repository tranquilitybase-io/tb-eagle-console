import { Component, OnInit, Input } from '@angular/core';
import { Solution } from '../../solutions.model';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Router } from '@angular/router';
import { Layout } from '@app/shared/layout/layout.model';

@Component({
  selector: 'app-solution-landing-grid',
  templateUrl: './solution-landing-grid.component.html',
  styleUrls: ['./solution-landing-grid.component.scss']
})
export class SolutionLandingGridComponent implements OnInit {
  @Input() solutions$: Observable<Solution[]>;
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService, private router: Router) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {}

  createNewSolution() {
    this.router.navigateByUrl('/dashboard/solutions/create');
  }
}
