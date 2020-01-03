import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  // private solutions = [
  //   {name:'Back-Office settkements',
  //     desc:'Solution for internal users to be able to process settlement for FX transactions',
  //     details :{applications :5, teams:6, lastUpdated:''}},
  //   {name:'Risk Engine',
  //     desc:'Solution to internal users with portfolio view of trading products ',
  //     details :{applications :4, teams:1, lastUpdated:''}},
  //   ];

  private solutions = [
    new Solution('Back-Office Settlements',
      'Solution for internal users to be able to process settlement for FX transactions',5, 2, '2009'),
    new Solution('Risk Engine',
      'Solution for internal users to be able to process settlement for FX transactions',3, 1, '2010'),
    new Solution('Back-Office Settlements',
      'Solution for internal users to be able to process settlement for FX transactions',9, 3, '2018')
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
