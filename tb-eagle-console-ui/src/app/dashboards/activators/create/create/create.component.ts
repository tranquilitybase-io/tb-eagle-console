import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startDeployment } from '@app/dashboards/activators/all/all.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  name: string = 'Flame Birdy';
  @ViewChild('form', { static: true }) form: NgForm;

  constructor(private router: Router, private store: Store<any>, private route: ActivatedRoute) {}

  onSubmit($event: Event) {
    $event.preventDefault();
    this.store.dispatch(startDeployment({ name: this.route.snapshot.queryParams.id }));
    this.router.navigateByUrl('/dashboard/activators?categorySwitch=All');
  }
}
