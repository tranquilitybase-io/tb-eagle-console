import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  name: string = 'Flame Birdy';
  @ViewChild('form', { static: true }) form: NgForm;

  constructor(private router: Router) {}

  onSubmit($event: Event) {
    console.log('form', this.form);
    $event.preventDefault();
    // this.router.navigateByUrl('/dashboard/activators?categorySwitch=All');
  }
}
