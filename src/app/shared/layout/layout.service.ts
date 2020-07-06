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
              solutionGridItemHeight: '470px',
              teamGridItemHeight: '470px',
              userGridItemHeight: '470px'
            };
          case breakpoints[Breakpoints.Medium]:
            return {
              gridCols: 3,
              landingZoneGridItemHeight: '150px',
              activatorGridItemHeight: '630px',
              applicationGridItemHeight: '550px',
              solutionGridItemHeight: '430px',
              teamGridItemHeight: '430px',
              userGridItemHeight: '430px'
            };
          case breakpoints[Breakpoints.Large]:
            return {
              gridCols: 4,
              landingZoneGridItemHeight: '150px',
              activatorGridItemHeight: '530px',
              applicationGridItemHeight: '500px',
              solutionGridItemHeight: '390px',
              teamGridItemHeight: '390px',
              userGridItemHeight: '390px'
            };
          case breakpoints[Breakpoints.XLarge]:
            return {
              gridCols: 5,
              landingZoneGridItemHeight: '150px',
              activatorGridItemHeight: '430px',
              applicationGridItemHeight: '500px',
              solutionGridItemHeight: '350px',
              teamGridItemHeight: '350px',
              userGridItemHeight: '350px'
            };
          default:
            return {
              gridCols: 1,
              landingZoneGridItemHeight: '210px',
              activatorGridItemHeight: '550px',
              applicationGridItemHeight: '600px',
              solutionGridItemHeight: '510px',
              teamGridItemHeight: '510px',
              userGridItemHeight: '510px'
            };
        }
      })
    );
}
