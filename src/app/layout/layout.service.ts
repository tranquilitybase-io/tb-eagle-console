import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
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
              gridCols: 2,
              landingZoneGridItemHeight: '180px',
              activatorGridItemHeight: '730px',
              applicationGridItemHeight: '600px',
              applicationCreationReviewGridHeight: '1200px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewLeftColumnSpan: 5,
              solutionGridItemHeight: '470px',
              teamGridItemHeight: '470px',
              userGridItemHeight: '470px',
              solutionsViewApplicationsGridHeight: '1000px'
            };
          case breakpoints[Breakpoints.Medium]:
            return {
              gridCols: 3,
              landingZoneGridItemHeight: '150px',
              activatorGridItemHeight: '630px',
              applicationGridItemHeight: '550px',
              applicationCreationReviewGridHeight: '1200px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewLeftColumnSpan: 5,
              solutionGridItemHeight: '430px',
              teamGridItemHeight: '430px',
              userGridItemHeight: '430px',
              solutionsViewApplicationsGridHeight: '1000px'
            };
          case breakpoints[Breakpoints.Large]:
            return {
              gridCols: 4,
              landingZoneGridItemHeight: '150px',
              activatorGridItemHeight: '530px',
              applicationGridItemHeight: '500px',
              applicationCreationReviewGridHeight: '700px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewLeftColumnSpan: 3,
              solutionGridItemHeight: '410px',
              teamGridItemHeight: '390px',
              userGridItemHeight: '390px',
              solutionsViewApplicationsGridHeight: '500px'
            };
          case breakpoints[Breakpoints.XLarge]:
            return {
              gridCols: 5,
              landingZoneGridItemHeight: '150px',
              activatorGridItemHeight: '430px',
              applicationGridItemHeight: '500px',
              applicationCreationReviewGridHeight: '700px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewLeftColumnSpan: 3,
              solutionGridItemHeight: '350px',
              teamGridItemHeight: '350px',
              userGridItemHeight: '350px',
              solutionsViewApplicationsGridHeight: '500px'
            };
          default:
            return {
              gridCols: 1,
              landingZoneGridItemHeight: '210px',
              activatorGridItemHeight: '550px',
              applicationGridItemHeight: '600px',
              applicationCreationReviewGridHeight: '700px',
              applicationCreationReviewGridColumnsAmount: 5,
              applicationCreationReviewLeftColumnSpan: 3,
              solutionGridItemHeight: '510px',
              teamGridItemHeight: '510px',
              userGridItemHeight: '510px',
              solutionsViewApplicationsGridHeight: '500px'
            };
        }
      })
    );
}
