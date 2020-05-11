import { Component, Input } from '@angular/core';
import { Activator } from '../../activator-store/activator-store.model';
//import { Application } from '../../solutions.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solutions-view-details-overview',
  templateUrl: './solutions-view-details-overview.component.html',
  styleUrls: ['./solutions-view-details-overview.component.scss']
})
export class SolutionsViewDetailsOverviewComponent {
  //application: Application;
  activator: Activator;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //this.application = this.route.snapshot.data['application'];
    this.activator = this.route.snapshot.data['activator'];
    debugger;
  }

  //  get activator(){
  //    this.application.activator;
  //  }

  get sensitivityColor(): string {
    return String(this.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }
}
