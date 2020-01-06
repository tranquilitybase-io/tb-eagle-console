import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-landing',
  templateUrl: './solution-landing.component.html',
  styleUrls: ['./solution-landing.component.scss']
})
export class SolutionLandingComponent implements OnInit {

  private solutions = [
    new Solution('Back-Office Settlements',
      'Solution for internal users to be able to process settlement for FX transactions',5, 2, '2009'),
    new Solution('Risk Engine',
      'Solution for internal users to be able to process settlement for FX transactions',3, 1, '2010'),
    new Solution('Risk Engine',
      'Solution for internal users to be able to process settlement for FX transactions',3, 1, '2010'),
    new Solution('Back-Office Settlements',
      'Solution for internal users to be able to process settlement for FX transactions',9, 3, '2018')
];
private values= [
  {name: "Favourites", count: 4 },
  {name: "Active", count: 4 },
  {name: "Archived", count: 3 }
];


  constructor() { }

  ngOnInit() {
  }

}
export class Solution{

  constructor(public name: string, public  desc: string,
    public applications: number, public teams : number,
    public lastUpdated: string, public active: string ='Active'){

  }
}
