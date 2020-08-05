import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { BreadcrumbStep } from './breadcrumbs.component.model';
import { Router, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { updateBreadcrumbs } from './breadcrumbs.component.actions';
import { selectBreadcrumbs } from './breadcrumbs.component.reducer';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnChanges {
  @Input() cancelActive = false;
  @Input() steps: BreadcrumbStep[] = [];
  @Input() isActive = false;
  /**
   * title - last breadcrumb step text.
   *
   * Should only be used if steps are not used.
   * It is used as the text of last breadcrumb step.
   */
  @Input() title: string = '';

  private titleStepCreated: boolean = false;

  constructor(private route: Router, private store: Store<any>) {}

  ngOnInit(): void {
    // If steps are not explicitly given in Input, read from url.
    if (!this.steps.length || this.titleStepCreated) {
      this.getBreadcrubsFromUrl();

      // If title was updated synchronously (before onInit), move it to the last position.
      if (this.titleStepCreated) {
        this.moveTitleToLastPosition();
      }
    }

    // WIP
    this.store.dispatch(updateBreadcrumbs({ steps: this.steps }));
    this.store.select(selectBreadcrumbs).subscribe(s => {
      console.log(s);
      // this.steps = s.steps
    });
  }

  /**
   * Switch last step with given title.
   * Title could be asynchronous, so onChanges is used.
   */
  ngOnChanges(): void {
    if (this.title && !this.titleStepCreated) {
      this.setTitleAsLastStep();
      this.titleStepCreated = true;
    }
  }

  getBreadcrubsFromUrl() {
    // Get URL segments
    let tree = this.route.parseUrl(location.pathname);
    let segments = tree.root.children[PRIMARY_OUTLET].segments;

    // Skip first segment - it's not necessary, and provides invalid link.
    let currentPath = segments.shift().path;

    //  Map URL segments into breadcrumb steps
    this.steps = this.steps.concat(
      segments.map(
        (segment: UrlSegment): BreadcrumbStep => {
          currentPath += '/' + segment.path;
          return {
            name: segment.path.replace('-', ' '),
            urlSegment: segment.path,
            link: currentPath
          };
        }
      )
    );
  }

  moveTitleToLastPosition() {
    let titleStep = this.steps.shift();
    this.steps.pop();
    this.steps.push(titleStep);
  }

  setTitleAsLastStep() {
    this.steps.pop();
    this.steps.push({ name: this.title, urlSegment: '' });
  }
}
