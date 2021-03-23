import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  layoutObserver$ = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
    .pipe(
      map(({ breakpoints }) => {
        switch (true) {
          case breakpoints[Breakpoints.Small]:
            return {
              activatorGridItemHeight: '730px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewGridHeight: '1200px',
              applicationCreationReviewLeftColumnSpan: 5,
              applicationGridItemHeight: '600px',
              gridCols: 2,
              landingZoneGridItemHeight: '180px',
              sharedServicesGridItemHeight: '180px',
              solutionGridItemHeight: '470px',
              solutionsViewApplicationsGridHeight: '1000px',
              teamGridItemHeight: '470px',
              userGridItemHeight: '470px',
              siteGridItemHeight: '470px',
            };
          case breakpoints[Breakpoints.Medium]:
            return {
              activatorGridItemHeight: '630px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewGridHeight: '1200px',
              applicationCreationReviewLeftColumnSpan: 5,
              applicationGridItemHeight: '550px',
              gridCols: 3,
              landingZoneGridItemHeight: '150px',
              sharedServicesGridItemHeight: '150px',
              solutionGridItemHeight: '430px',
              solutionsViewApplicationsGridHeight: '1000px',
              teamGridItemHeight: '430px',
              userGridItemHeight: '430px',
              siteGridItemHeight: '470px',
            };
          case breakpoints[Breakpoints.Large]:
            return {
              activatorGridItemHeight: '530px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewGridHeight: '700px',
              applicationCreationReviewLeftColumnSpan: 3,
              applicationGridItemHeight: '500px',
              gridCols: 4,
              landingZoneGridItemHeight: '150px',
              sharedServicesGridItemHeight: '150px',
              solutionGridItemHeight: '410px',
              solutionsViewApplicationsGridHeight: '500px',
              teamGridItemHeight: '390px',
              userGridItemHeight: '390px',
              siteGridItemHeight: '390px',
            };
          case breakpoints[Breakpoints.XLarge]:
            return {
              activatorGridItemHeight: '430px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewGridHeight: '700px',
              applicationCreationReviewLeftColumnSpan: 3,
              applicationGridItemHeight: '500px',
              gridCols: 5,
              landingZoneGridItemHeight: '150px',
              sharedServicesGridItemHeight: '150px',
              solutionGridItemHeight: '350px',
              solutionsViewApplicationsGridHeight: '500px',
              teamGridItemHeight: '350px',
              userGridItemHeight: '350px',
              siteGridItemHeight: '350px',
            };
          default:
            return {
              activatorGridItemHeight: '550px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewGridHeight: '700px',
              applicationCreationReviewLeftColumnSpan: 3,
              applicationGridItemHeight: '600px',
              gridCols: 1,
              landingZoneGridItemHeight: '210px',
              sharedServicesGridItemHeight: '210px',
              solutionGridItemHeight: '510px',
              solutionsViewApplicationsGridHeight: '500px',
              teamGridItemHeight: '510px',
              userGridItemHeight: '510px',
              siteGridItemHeight: '510px',
            };
        }
      })
    );
}
