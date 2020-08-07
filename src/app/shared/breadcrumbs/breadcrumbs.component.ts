import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { BreadcrumbStep } from './breadcrumbs.component.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateBreadcrumbs, cutBreadcrumbsFrom } from './breadcrumbs.component.actions';
import { selectBreadcrumbs } from './breadcrumbs.component.reducer';
import { take } from 'rxjs/operators';

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

  constructor(private store: Store<any>, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.data.pipe(take(1)).subscribe(routerData => {
      // If steps are not explicitly given in Input, read from url.
      if (this.shouldGetBreadcrumbsFromURL()) {
        // If title was updated synchronously (before onInit), move it to the last position.
        if (this.isTitleCreatedBeforeOnInit()) {
          this.steps = this.steps.concat(this.getBreadcrubsFromUrl(routerData.breadcrumbURL));
          this.synchronousTitleHandler();
        } else {
          this.steps = this.getBreadcrubsFromUrl(routerData.breadcrumbURL);
        }
      }

      // WIP
      // TODO: store breadcrumbs to localstorage
      // TODO: handle page refresh (currently does not initiate breadcrumbs from url on a template where steps!=null)
      this.updateBreadcrumbsStore();
      this.showStepsFromStore();
    });
  }

  private showStepsFromStore() {
    this.store
      .select(selectBreadcrumbs)
      .pipe(take(1))
      .subscribe(s => {
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

  /**
   * True if steps are not given through html template, or if title was created synchronously.
   */
  shouldGetBreadcrumbsFromURL(): boolean {
    return !this.steps.length || this.titleStepCreated;
  }

  isTitleCreatedBeforeOnInit(): boolean {
    return this.titleStepCreated;
  }

  getBreadcrubsFromUrl(url: string): BreadcrumbStep[] {
    // Get URL segments
    let segments = url.split('/');

    // Skip first segment - it's not necessary, and provides invalid link.
    let currentPath = segments.shift();

    //  Map URL segments into breadcrumb steps
    return segments.map(
      (segment: string): BreadcrumbStep => {
        let parentSegment = currentPath;
        currentPath += '/' + segment;
        return {
          name: segment.replace('-', ' '),
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
