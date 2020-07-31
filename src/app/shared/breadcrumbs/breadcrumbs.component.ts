import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { BreadcrumbStep } from './breadcrumbs.component.model';
import { Router, ActivatedRoute, UrlSegment, PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnChanges {
  @Input() cancelActive = false;
  @Input() steps: BreadcrumbStep[] = [];
  @Input() isActive = false;
  @Input() title: string = '';

  private titleUpdated: boolean = false;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(
    //   data => console.log(data)
    // )
    /**
     * If steps are not explicitly given in Input, read from url.
     */
    if (!this.steps.length) {
      let tree = this.route.parseUrl(location.pathname);
      let segments = tree.root.children[PRIMARY_OUTLET].segments;
      /**
       * Skip first segment - it's not necessary
       */
      let currentPath = segments[0].path;
      this.steps = segments.slice(1).map(
        (segment: UrlSegment): BreadcrumbStep => {
          currentPath += '/' + segment.path;
          return {
            name: segment.path,
            link: currentPath
          };
        }
      );
    }
  }

  ngOnChanges(): void {
    if (this.title && !this.titleUpdated) {
      this.steps.pop();
      this.steps.push({ name: this.title });
      this.titleUpdated = true;
    }
  }
}
