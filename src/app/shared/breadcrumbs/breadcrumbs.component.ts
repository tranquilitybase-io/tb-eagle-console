import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { BreadcrumbStep } from './breadcrumbs.component.model';
import { Router, UrlSegment, PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnChanges {
  @Input() cancelActive = false;
  @Input() steps: BreadcrumbStep[] = [];
  @Input() badgeText: string = null;
  @Input() badgeColorClass: string = null;
  /**
   * title - should only be used if steps are not used. It is used to replace the default value of last step.
   */
  @Input() title = '';

  private titleCurrent = '';
  private isTitleUpdated = false;

  constructor(private route: Router) {}

  ngOnInit(): void {
    /**
     * If steps are not explicitly given in Input, read from url.
     */
    if (!this.steps.length || this.isTitleUpdated) {
      let tree = this.route.parseUrl(location.pathname);
      let segments = tree.root.children[PRIMARY_OUTLET].segments;
      /**
       * Skip first segment - it's not necessary, and provides invalid link.
       */
      let currentPath = segments.shift().path;
      this.steps = this.steps.concat(
        segments.map(
          (segment: UrlSegment, index: number): BreadcrumbStep => {
            currentPath += '/' + segment.path;
            return {
              name: segment.path.replace('-', ' '),
              link: index !== segments.length - 1 ? currentPath : null // Set link if not last element
            };
          }
        )
      );
      /**
       * If title was updated synchronously (before onInit), move it to the last position.
       */
      if (this.isTitleUpdated) {
        let titleStep = this.steps.shift();
        this.steps.pop();
        this.steps.push(titleStep);
      }
    }
  }

  ngOnChanges(): void {
    if (this.title && (!this.isTitleUpdated || this.titleCurrent !== this.title)) {
      this.steps.pop();
      this.steps.push({ name: this.title });
      this.titleCurrent = this.title;
      this.isTitleUpdated = true;
    }
  }
}
