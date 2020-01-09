import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-solution',
  templateUrl: './create-solution.component.html',
  styleUrls: ['./create-solution.component.scss']
})
export class CreateSolutionComponent implements OnInit {



  businessUnits: string[];

  onPartTwo: boolean = true;

  constructor() { }

  ngOnInit() {

    this.businessUnits = ['FICC', 'Modern Apps', 'Data'];

  }

  toggleSolutionPage(){

    this.onPartTwo = !this.onPartTwo;

  }

}
