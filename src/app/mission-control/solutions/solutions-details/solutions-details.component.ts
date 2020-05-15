import { Component, OnInit } from '@angular/core';
import { SolutionsService } from '../solutions.service';
import { ActivatedRoute } from '@angular/router';
import { Application } from '../solutions.model';

@Component({
  selector: 'app-solutions-details',
  templateUrl: './solutions-details.component.html',
  styleUrls: ['./solutions-details.component.scss']
})
export class SolutionsDetailsComponent implements OnInit {
  application: Application;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.application = this.route.snapshot.data['application'] as Application;
  }

  get activator() {
    return this.application.activator;
  }
}
