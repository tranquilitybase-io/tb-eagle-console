import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

const AppBreakpoints = {
  Level2: '(min-width: 1050px) and (max-width: 1389.99px)',
  Level3: '(min-width: 1390px) and (max-width: 1749.99px)',
  Level4: '(min-width: 1750px) and (max-width: 1919.99px)',
  Level5: '(min-width: 1920px)'
};

@Injectable({
  providedIn: 'root'
})
export class GridColsService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  gridColsObserver$ = this.breakpointObserver
    .observe([AppBreakpoints.Level2, AppBreakpoints.Level3, AppBreakpoints.Level4, AppBreakpoints.Level5])
    .pipe(
      map(({ breakpoints }) => {
        if (breakpoints[AppBreakpoints.Level2]) {
          return 2;
        }
        if (breakpoints[AppBreakpoints.Level3]) {
          return 3;
        }
        if (breakpoints[AppBreakpoints.Level4]) {
          return 4;
        }
        if (breakpoints[AppBreakpoints.Level5]) {
          return 5;
        }
        return 1;
      })
    );
}
