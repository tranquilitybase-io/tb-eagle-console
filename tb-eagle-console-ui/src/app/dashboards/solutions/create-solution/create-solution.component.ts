import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-solution',
  templateUrl: './create-solution.component.html',
  styleUrls: ['./create-solution.component.scss']
})
export class CreateSolutionComponent implements OnInit {
  // drop down temporary values
  businessUnits: string[];
  ciOptions: string[];
  cdOptions: string[];
  sourceControlOptions: string[];
  changeControlOptions: string[];

  onPartTwo: boolean = false;
  screenNum: number = 0;

  ngOnInit() {
    this.businessUnits = ['FICC', 'Modern Apps', 'Data'];
    this.ciOptions = ['Jenkins CI', 'Bamboo', 'Travis CI'];
    this.cdOptions = ['Jenkins', 'Spinnaker', 'Screwdriver'];
    this.sourceControlOptions = ['GitHub', 'ButBucket'];
    this.changeControlOptions = ['Service Now'];
  }

  toggleSolutionPage() {
    this.onPartTwo = !this.onPartTwo;

    this.screenNum = this.screenNum == 0 ? (this.screenNum = 1) : (this.screenNum = 0);
  }
}
