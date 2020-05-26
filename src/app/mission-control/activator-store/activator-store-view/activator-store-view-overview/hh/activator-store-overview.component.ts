// import { Component, OnInit } from '@angular/core';
// import { Application } from '../../applications.model';
// import { Observable } from 'rxjs';
// import { Activator } from '@app/mission-control/activator-store/activator-store.model';
// import { ActivatedRoute } from '@angular/router';
// import { ActivatorStoreService } from '@app/mission-control/activator-store/activator-store.service';

// @Component({
//   selector: 'app-applications-view-overview',
//   templateUrl: './applications-view-overview.component.html',
//   styleUrls: ['./applications-view-overview.component.scss']
// })
// export class ApplicationsViewOverviewComponent implements OnInit {
//   application: Application;
//   activator$: Observable<Activator>;
//   activator: Activator;

//   constructor(private route: ActivatedRoute, private activatorStoreService: ActivatorStoreService) {}

//   ngOnInit() {
//     this.application = this.route.snapshot.data['application'] as Application;
//     this.activator$ = this.activatorStoreService.getByKey(this.application.activatorId);
//     this.activator$.subscribe(activator => (this.activator = activator));
//   }

//   get sensitivityColor(): string {
//     return String(this.activator ? this.activator.sensitivity : '').toLowerCase() === 'restricted'
//       ? 'red'
//       : 'dark-grey';
//   }
// }
