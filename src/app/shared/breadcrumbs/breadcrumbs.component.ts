import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbStep } from './breadcrumbs.component.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() steps: BreadcrumbStep[] = [];
  @Input() visibleBreadcrumbsStartIndex: number = 0;
  @Input() badgeText: string = null;
  @Input() badgeColorClass: string = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!this.steps.length) {
      this.route.data.subscribe(data => {
        this.steps = data.breadcrumbsSteps;
      });
    }
  }
}
