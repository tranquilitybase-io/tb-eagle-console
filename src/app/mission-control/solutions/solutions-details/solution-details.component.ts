import { Component, OnInit } from '@angular/core';
import { Activator } from '../solution.model';
import { SolutionService } from '../solution.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solution-details',
  templateUrl: './solution-details.component.html',
  styleUrls: ['./solution-details.component.scss']
})
export class SolutionDetailsComponent implements OnInit {
  activator: Activator;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.activator = this.route.snapshot.data['activator'] as Activator;
  }
}
