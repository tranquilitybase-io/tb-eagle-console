import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solution-landing',
  templateUrl: './solution-landing.component.html',
  styleUrls: ['./solution-landing.component.scss']
})
export class SolutionLandingComponent implements OnInit {


  solutions : Solution[];
  
  private values = [
    { name: "Favourites", count: 4 },
    { name: "Active", count: 4 },
    { name: "Archived", count: 3 }
  ];

  current$: Observable<string>;
  event: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.current$ = this.route.queryParamMap.pipe(
      map(queryParams => queryParams.get('groupSwitch'))
    );
    this.current$.subscribe(event => this.getSolutions(event));

  }


  getSolutions(value: string) {

    var temp: Solution[];
    console.log(value)
    if (value === "Favourites") {
      this.solutions = [
        new Solution('Back-Office Settlements',
          'Solution for internal users to be able to process settlement for FX transactions', 5, 2, '2091'),
        new Solution('Risk Engine',
          'Solution for internal users to be able to process settlement for FX transactions', 3, 1, '2010'),
      ];
    }
    if (value === "Active") {
      this.solutions = [
        new Solution('Back-Office Settlements-Active',
          'Solution for internal users to be able to process settlement for FX transactions', 5, 2, '2091'),
        new Solution('Risk Engine-Active',
          'Solution for internal users to be able to process settlement for FX transactions', 3, 1, '2023'),
      ];
    } if (value === "Archived") {
      this.solutions = [
        new Solution('Back-Office Settlements-Archived',
          'Solution for internal users to be able to process settlement for FX transactions', 5, 2, '2001'),
        new Solution('Risk Engine-Archived',
          'Solution for internal users to be able to process settlement for FX transactions', 3, 1, '2000'),
      ];
    }
  }
}
export class Solution {

  constructor(public name: string, public desc: string,
    public applications: number, public teams: number,
    public lastUpdated: string, public active: string = 'Active') {

  }
}
