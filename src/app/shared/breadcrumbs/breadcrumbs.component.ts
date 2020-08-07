import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { BreadcrumbStep } from './breadcrumbs.component.model';
import { Router, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateBreadcrumbs, cutBreadcrumbsFrom } from './breadcrumbs.component.actions';
import { selectBreadcrumbs } from './breadcrumbs.component.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnChanges, OnDestroy {
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
  private _subscription: Subscription = null;

  constructor(private route: Router, private store: Store<any>) {}

  ngOnInit(): void {
    // If steps are not explicitly given in Input, read from url.
    if (this.shouldGetBreadcrumbsFromURL()) {
      // If title was updated synchronously (before onInit), move it to the last position.
      if (this.isTitleCreatedBeforeOnInit()) {
        this.steps = this.steps.concat(this.getBreadcrubsFromUrl());
        this.synchronousTitleHandler();
      } else {
        this.steps = this.getBreadcrubsFromUrl();
      }
    }

    // WIP
    // TODO: store breadcrumbs to localstorage
    // TODO: handle page refresh (currently does not initiate breadcrumbs from url on a template where steps!=null)
    this.updateBreadcrumbsStore();
    this.showStepsFromStore();
  }

  private showStepsFromStore() {
    this._subscription = this.store.select(selectBreadcrumbs).subscribe(s => {
      this.steps = s;
    });
  }

  private updateBreadcrumbsStore() {
    this.store.dispatch(cutBreadcrumbsFrom({ urlSegment: this.steps[this.steps.length - 1].parentUrl }));
    this.store.dispatch(updateBreadcrumbs({ breadcrumbsSteps: this.steps }));
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

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  /**
   * True if steps are not given through html template, or if title was created synchronously.
   */
  shouldGetBreadcrumbsFromURL(): boolean {
    return !this.steps.length || this.titleStepCreated;
  }

  isTitleCreatedBeforeOnInit(): boolean {
    return this.titleStepCreated;
  }

  getBreadcrubsFromUrl(): BreadcrumbStep[] {
    // Get URL segments
    let tree = this.route.parseUrl(location.pathname);
    let segments = tree.root.children[PRIMARY_OUTLET].segments;

    // Skip first segment - it's not necessary, and provides invalid link.
    let currentPath = segments.shift().path;

    //  Map URL segments into breadcrumb steps
    return segments.map(
      (segment: UrlSegment): BreadcrumbStep => {
        let parentSegment = currentPath;
        currentPath += '/' + segment.path;
        return {
          name: segment.path.replace('-', ' '),
          parentUrl: parentSegment,
          link: currentPath
        };
      }
    );
  }

  /**
   * Takes title step from first position and replaces last step with it.
   */
  synchronousTitleHandler(): void {
    let titleStep = this.steps.shift();
    let currentLast = this.steps.pop();
    this.steps.push({ ...titleStep, parentUrl: currentLast.parentUrl });
  }

  setTitleAsLastStep(): void {
    let currentLast = this.steps.pop();
    this.steps.push({ name: this.title, parentUrl: currentLast ? currentLast.parentUrl : '' });
  }
}
