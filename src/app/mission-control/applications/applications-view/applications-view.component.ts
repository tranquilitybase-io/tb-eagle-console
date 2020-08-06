import { Component, OnInit } from '@angular/core';
import { Application } from '../applications.model';
import { ActivatedRoute } from '@angular/router';
import { SolutionsService } from '../../solutions/solutions.service';
import { Solution } from '../../solutions/solutions.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-applications-view',
  templateUrl: './applications-view.component.html',
  styleUrls: ['./applications-view.component.scss']
})
export class ApplicationsViewComponent implements OnInit {
  application: Application;
  solution: Solution = { businessUnit: {}, team: {} } as Solution;
  solution$: Observable<Solution>;

  constructor(private route: ActivatedRoute, private solutionsService: SolutionsService) {}

  ngOnInit() {
    this.application = this.route.snapshot.data['application'] as Application;
    this.solution$ = this.solutionsService.getByKey(this.application.solutionId);
  }
}
