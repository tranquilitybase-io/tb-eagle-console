import { Component, OnInit, Input } from '@angular/core';
import { Solution } from '../solutions/solutions.component';

@Component({
  selector: 'app-solution-details',
  templateUrl: './solution-details.component.html',
  styleUrls: ['./solution-details.component.scss']
})

export class SolutionDetailsComponent implements OnInit {

  @Input('solution') solution: Solution;

  constructor() {
  }

  ngOnInit() {

  }

}
