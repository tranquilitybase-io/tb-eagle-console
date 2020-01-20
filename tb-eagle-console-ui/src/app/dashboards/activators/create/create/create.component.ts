import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  name: string = 'Flame Birdy';

  constructor(private router: Router) {}

  onSubmit($event: Event) {
    $event.preventDefault();
    this.router.navigateByUrl('/dashboard/activators?categorySwitch=All');
  }
}
