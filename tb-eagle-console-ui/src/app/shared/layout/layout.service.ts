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
              landingZoneGridItemHeight: '180px'
            };
          case breakpoints[Breakpoints.Medium]:
            return {
              gridCols: 3,
              landingZoneGridItemHeight: '150px'
            };
          case breakpoints[Breakpoints.Large]:
            return {
              gridCols: 4,
              landingZoneGridItemHeight: '150px'
            };
          case breakpoints[Breakpoints.XLarge]:
            return {
              gridCols: 5,
              landingZoneGridItemHeight: '150px'
            };
          default:
            return {
              gridCols: 1,
              landingZoneGridItemHeight: '210px'
            };
        }
      })
    );
}
