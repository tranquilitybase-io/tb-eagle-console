import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() cancelActive = false;
  @Input() steps: object[];
  @Input() isActive = false;
}
