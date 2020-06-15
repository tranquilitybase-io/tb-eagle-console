import { Component, OnInit } from '@angular/core';
import { Application } from '../applications.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applications-view',
  templateUrl: './applications-view.component.html',
  styleUrls: ['./applications-view.component.scss']
})
export class ApplicationsViewComponent implements OnInit {
  application: Application;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.application = this.route.snapshot.data['application'] as Application;
  }
}
