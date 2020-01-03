import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solution-select',
  templateUrl: './solution-select.component.html',
  styleUrls: ['./solution-select.component.scss']
})

export class SolutionSelectComponent implements OnInit {
  
  @Input('values') values: { name: string, count: number }[];

  constructor() { }

  ngOnInit() {
  }

}
